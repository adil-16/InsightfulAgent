import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ Component }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <Navigate to="/home" replace /> : <Component />;
};

export default PublicRoutes;
