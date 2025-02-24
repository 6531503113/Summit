import React from "react";
import { useNavigate, Link } from "react-router-dom"; 
import "./jobs.css";

function Jobs() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Admin</h2>
        <ul>
          <li><Link to="/profile"><i className="fas fa-user"></i>Personal information</Link></li>
          <li><Link to="/announcement">Announcement</Link></li>
          <h4>Recruitment</h4>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/exam-results">Examination results</Link></li>
          <li><Link to="/checklist">Check list</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Jobs</h1>
          <button className="list-button">List</button>
        </header>

        <div className="announcement-categories">
          <h4>
            <span className="category">Employees</span><span className="category">Internships</span>
          </h4>
        </div>

        <div className="job-status">
          <div className="job-cards">
            <div className="job-card">
              <h4>Mr. Somchai Chatthai</h4>
              <p className="job-description1">Bachelor's degrees</p>
              <p className="job-description2">Age: 22</p>
              <p className="job-description3">Work experience: -</p>
            </div>
            <div className="job-card">
              <h4>Mr. Pitak Cheiywchay</h4>
              <p className="job-description1">Education: -</p>
              <p className="job-description2">Age: 20</p>
              <p className="job-description3">Work experience: -</p>
            </div>
          </div>

          <div className="job-cards">
            <div className="job-card closed">
              <h4>Ms. Somying Makmee</h4>
              <p className="job-description1">Bachelor's degrees</p>
              <p className="job-description2">Age: 27</p>
              <p className="job-description3">Work experience: 2 years</p>
            </div>
            <div className="job-card closed">
              <h4>Mr. Sudjab Themak</h4>
              <p className="job-description1">Bachelor's degrees</p>
              <p className="job-description2">Age: 46</p>
              <p className="job-description3">Work experience: 12 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
