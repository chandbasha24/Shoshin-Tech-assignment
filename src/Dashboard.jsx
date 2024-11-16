import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="header">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="user-info">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-dots"></i>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.2LDwIIbLvTbB1QmLlusDvgHaE8&pid=Api&P=0&h=180"
            alt="User"
            width="40"
            height="40"
          />
          <span>Shoshin Tech</span>
        </div>
      </div>
      <div className="dashboard">
        <div className="card available-position">
          <h3>Available Positions</h3>
          <p className="number">5</p>
          <span className="status">Open</span>
        </div>
        <div className="card job-open">
          <h3>Job Openings</h3>
          <p className="number">8</p>
          <span className="status active">Active</span>
        </div>
        <div className="card new-employees">
          <h3>New Employees</h3>
          <p className="number">12</p>
          <span className="status department">Onboarding</span>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity">
          <p className="description">
            <span className="active">John Doe</span> joined the Engineering
            Department.
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
