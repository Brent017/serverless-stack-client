import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function UnauthenticatedRoute({ children, ...rest }) {
    const z{ isAuthenticated } = useAppContext();
    return (
        <Route {...rest}>
            {!isAuthenticated ? (
                children
            ) : (
                <Redirect to="/" />
            )}
        </Route>
    );
}