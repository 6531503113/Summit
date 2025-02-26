import React from "react";
import { useNavigate } from "react-router-dom";
import "./addjob.css";

function Addjob() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Recruiting</h2>
        <ul>
          <li><a href="/personal-information"><i className="fas fa-user"></i>Personal information</a></li>
          <li><a href="/announcement">Announcement</a></li>
          <h4>Recruitment</h4>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/examination-results">Examination results</a></li>
          <li><a href="/checklist">Check list</a></li>
        </ul>

        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Recruiting </h1>
        </header>

                    <div className="job-form-container">
              <form className="job-form">
                <div className="form-grid">
               
                  <div className="form-section">
                    <label>Job position</label>
                    <select className="short-input">
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="manager">Implementer</option>
                    </select>

                    <label>Job description</label>

                    <label>Number accepted</label>
                    <input type="number" placeholder="Number of employees" min="0" />

                    <label>Work format</label>
                    <select>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                    </select>

                    <label>Work location</label>
                    <select>
                      <option value="bangkok">Bangkok</option>
                      <option value="chiang Rai">Chiang Rai</option>
                    </select>

                    <label>Salary (Bath)</label>
                    <input type="number" placeholder="Salary" min="0" />

                    <label>Working hours</label>
                    <input className="short-input" type="text" placeholder="Working hours" />

                    <label>Responsibilities</label>
                    <textarea placeholder="Responsibilities"></textarea>
                  </div>

                 
                  <div className="form-section">
                    <label>Features</label>

                    <label>Application accepted until</label>
                    <input type="date" />

                    <label>Gender</label>
                    <select>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    <label>Age (years)</label>
                    <input type="number" placeholder="Age" min="0" />

                    <label>Education level</label>
                    <select>
                      <option value="high-school">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                    </select>
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="button" className="draft-button">Draft</button>
                  <button type="submit" className="save-button">Save</button>
                </div>
              </form>
            </div>
      </div>
    </div>
  );
}

export default Addjob;