// contexts/AuthContext.tsx
import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";

type UserRole = "admin" | "superAdmin" | "authUser";

interface DecodedToken {
	exp: number;
	role: UserRole;
}

interface AuthContextType {
	isLoggedIn: boolean;
	userRole: UserRole | null;
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userRole, setUserRole] = useState<UserRole | null>(null);

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
		} catch (error) {
			console.error("Failed to decode token:", error);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		setUserRole(null);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
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
