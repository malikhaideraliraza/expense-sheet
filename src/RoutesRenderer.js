import React from 'react';
import { Route } from "react-router-dom";

const RoutesRenderer = ({ routes }) => {
	return (
        <>
            {
                routes.map(route => {
                    return (
                        <Route key={route.path} exact path={route.path} component={() => <route.page />} />
                    )
                })
            }
        </>	
	);
};

export default RoutesRenderer;
