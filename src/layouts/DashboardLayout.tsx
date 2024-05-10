import React from "react";
import DashboardSidebar from "@components/Dashboard/Sidebar/DashboardSidebar";
import DashboardNavbar from "@components/Dashboard/DashboardNavbar";

type Props = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <div className="g-sidenav-show ">
                <DashboardSidebar />
                <main
                    className="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
                >
                    <DashboardNavbar />
                    <div className="container-fluid py-4">
                        {children}
                    </div>
                </main>
            </div>
        </>

    );
}

export default DashboardLayout;