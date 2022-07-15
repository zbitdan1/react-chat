import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
      <Route
        {...rest}
        render={(props) =>
          user ? <Component {...props} /> : <Navigate to="/login" />
        }
      />
  );
};

export default PrivateRoutes;
