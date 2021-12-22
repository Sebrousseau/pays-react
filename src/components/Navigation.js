import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to='/' className={(navData) => navData.isActive ? "nav-active" : ""}>
        Accueil
      </NavLink>
      <NavLink to='/about' className={(navData) => navData.isActive ? "nav-active" : ""} >
        A propos
      </NavLink>
    </div>
  );
};

export default Navigation;
