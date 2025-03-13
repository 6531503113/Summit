import React from "react";
import { useNavigate, Link } from "react-router-dom";  // นำเข้า Link จาก react-router-dom
import "./announcement.css";

function Announcement() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="recruitment-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Admin</h2>
        <ul>
          <li><Link to="/profile">Personal Information</Link></li>
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

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Announcement</h1>
          {/* Header Buttons */}
          <div className="header-buttons">
            <button className="action-button">Add</button>
            <button className="action-button">Job</button>
            <button className="action-button">Period</button>
          </div>
        </header>

        {/* Announcement Categories */}
        <div className="announcement-categories">
          <h4>
            <span className="category">Employees</span><span className="category">Internships</span>
          </h4>
        </div>

        {/* Job Status Section */}
        <div className="job-status">
          <h3>Available</h3>
          <div className="job-cards">
            <div className="job-card">
              <h4>Software Engineer</h4>
              <p className="job-description1">1 Jan 2025 - 1 Feb 2025</p>
              <p className="job-description2">Exam date : 5 Feb 2025</p>
              <p className="job-description3">Apply for work : 7</p>
              <p className="job-description4">Pass : -</p>
              <button className="apply-button">Apply Now</button>
            </div>
            <div className="job-card">
              <h4>UI/UX Designer</h4>
              <p className="job-description1">1 Jan 2025 - 1 Feb 2025</p>
              <p className="job-description2">Exam date : 5 Feb 2025.</p>
              <p className="job-description3">Apply for work : 7</p>
              <p className="job-description4">Apply for work : 7</p>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>

          <h3>Non available</h3>
          <div className="job-cards">
            <div className="job-card closed">
              <h4>Data Scientist</h4>
              <p className="job-description1">1 Nov 2024 - 1 Dec 2024</p>
              <p className="job-description2">Exam date : 5 Feb 2025</p>
              <p className="job-description3">Apply for work : 5</p>
              <p className="job-description4">Pass : 2</p>
              <button className="closed-button">Closed</button>
            </div>
            <div className="job-card closed">
              <h4>Marketing Specialist</h4>
              <p className="job-description1">1 Nov 2024 - 1 Dec 2024</p>
              <p className="job-description2">Apply for work : 5</p>
              <p className="job-description3">Apply for work : 5</p>
              <p className="job-description4">Pass : 2</p>
              <button className="closed-button">Closed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
