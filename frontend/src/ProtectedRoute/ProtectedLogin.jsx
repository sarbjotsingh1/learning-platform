import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserLogin = ({ children }) => {
	let isUserAuthenticated = localStorage.getItem("user");
	return <>{isUserAuthenticated ? children : <Navigate to="/login" />}</>;
};

export default ProtectedUserLogin;