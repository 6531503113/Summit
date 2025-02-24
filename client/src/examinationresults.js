import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./examinationresults.css";

function ExaminationResults() {
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
          <li><Link to="/exam-results" className="active">Examination results</Link></li>
          <li><Link to="/checklist">Check list</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>The List of Applicants for Programmer</h1>
        </header>

        <div className="applicants-list">
          <div className="applicant">
            <input type="checkbox" name="applicant" id="applicant1" />
            <label htmlFor="applicant1">Mr. Somchai Chatthai / Age 22 / Bachelor's degrees / Experience -</label>
            <button className="portfolio-button">Portfolio</button>
          </div>
          <div className="applicant">
            <input type="checkbox" name="applicant" id="applicant2" />
            <label htmlFor="applicant2">Ms. Sornying Makmee / Age 27 / Bachelor's degrees / Experience 2 years</label>
            <button className="portfolio-button">Portfolio</button>
          </div>
          <div className="applicant">
            <input type="checkbox" name="applicant" id="applicant3" />
            <label htmlFor="applicant3">Mr. Pitak Chiewchay / Age 20 / Education - / Experience -</label>
            <button className="portfolio-button">Portfolio</button>
          </div>
          <div className="applicant">
            <input type="checkbox" name="applicant" id="applicant4" />
            <label htmlFor="applicant4">Mr. Sudjab Themak / Age 46 / Bachelor's degrees / Experience 12 years</label>
            <button className="portfolio-button">Portfolio</button>
          </div>
        </div>

        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default ExaminationResults;