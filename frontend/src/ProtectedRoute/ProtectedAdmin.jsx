import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminLogin = ({ children }) => {
	const isAdminAuthenticated = localStorage.getItem("admin");

	return <>{isAdminAuthenticated ? children : <Navigate to="/login" />}</>;
};

export default ProtectedAdminLogin;