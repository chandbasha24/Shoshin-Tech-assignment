import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Vasitum</h2>
      <ul>
        <li>
          <a className="active" href="#">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user-friends"></i> Recruitment
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-calendar-alt"></i> Schedule
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user"></i> Employee
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-building"></i> Department
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-cogs"></i> Support
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-cog"></i> Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
