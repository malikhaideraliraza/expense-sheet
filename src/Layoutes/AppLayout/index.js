import React, { useEffect } from 'react';

//RoutesRendere
import RoutesRenderer from '../../RoutesRenderer';

import './appLayout.css';

const AppLayout = ({ routes }) => {

   useEffect(() => {
      const loggedUser = localStorage.getItem('user');

      if (loggedUser) {
         if (JSON.parse(loggedUser).token) window.location = '/dashboard';
      }
   }, [])

   return (
      <>
         <div className="sidenav">
            <div className="login-main-text">
               <h2>Expense Tracker</h2>
               <p>Login or register from here to access.</p>
            </div>
         </div>
         <RoutesRenderer routes={routes} />
      </>
	);
};

export default AppLayout;
