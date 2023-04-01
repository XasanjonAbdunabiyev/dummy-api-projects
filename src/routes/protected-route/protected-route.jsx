import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
	if (!localStorage.getItem("token")) {
		return <Navigate to={"/login"} replace />;
	} else {
		return children;
	}
};

export default ProtectedRoute;