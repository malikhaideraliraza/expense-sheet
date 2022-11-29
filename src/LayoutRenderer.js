import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

//layoutes
import LayoutRoutes from "./routes";

const LayoutRenderer = () => {

	return (
        <BrowserRouter>
            <>
                {
                    LayoutRoutes.map((layoutObj, index) => {
                        const layoutPaths = layoutObj.routes.map(routes => routes.path);
                        return (
                            <Route
                                key={index}
                                exact
                                path={layoutPaths}
                                component={ () =>
                                    <layoutObj.layout routes={layoutObj.routes} />
                                } 
                            />
                        )
                    })
                }
            </>
        </BrowserRouter>
	);
};

export default LayoutRenderer;
