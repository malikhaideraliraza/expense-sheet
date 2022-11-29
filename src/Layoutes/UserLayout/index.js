import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import RoutesRenderer from '../../RoutesRenderer';

const UserLayout = ({ routes }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');

    if (!loggedUser || !JSON.parse(loggedUser).token) {
      //window.location = '/';
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location = '/';
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-auto">
      <div class="container-fluid">
        <Link class="navbar-brand font-weight-bolder" type='button' to='/dashboard'>
          <span className="">Expense Tracker</span>
        </Link>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="mainNavbar">
          <Link className="nav-link text-light" to="/dashboard">Dashboard</Link>
          <Link className="nav-link text-light" to="/analytics">Analytics</Link>
          <ul className="nav justify-content-end"></ul>
          <button onClick={handleLogout} className="btn btn-sm btn-light nav-link text-dark" >LogOut</button>
        </div>
        </div>
      </nav>
      <div class="container">
            <RoutesRenderer routes={routes} />
      </div>
    </>
  );
};

export default UserLayout;
