// contexts/AuthContext.tsx
import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode

type UserRole = "admin" | "superAdmin" | "authUser";

interface DecodedToken {
	exp: number;
	role: UserRole;
	email: string; // Include email in the decoded token interface
}

interface AuthContextType {
	isLoggedIn: boolean;
	userRole: UserRole | null;
	userEmail: string | null; // Add userEmail to the context type
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userRole, setUserRole] = useState<UserRole | null>(null);
	const [userEmail, setUserEmail] = useState<string | null>(null); // Add state for user email

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const decodedToken = jwtDecode<DecodedToken>(token);
				const currentTime = Date.now() / 1000;
				if (decodedToken.exp < currentTime) {
					localStorage.removeItem("token");
				} else {
					setIsLoggedIn(true);
					setUserRole(decodedToken.role);
					setUserEmail(decodedToken.email); // Set the user email
				}
			} catch (error) {
				console.error("Failed to decode token:", error);
				localStorage.removeItem("token");
			}
		}
	}, []);

	const login = (token: string) => {
		try {
			const decodedToken = jwtDecode<DecodedToken>(token);
			localStorage.setItem("token", token);
			setIsLoggedIn(true);
			setUserRole(decodedToken.role);
			setUserEmail(decodedToken.email); // Set the user email
		} catch (error) {
			console.error("Failed to decode token:", error);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		setUserRole(null);
		setUserEmail(null); // Reset the user email
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, userRole, userEmail, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
