import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/events" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Events
      </Link>
    </div>
  );
};

export default DashboardActions;
