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
            <div className="form-section">
              <label>Job position</label>
              <select>
                <option value="">Select Position</option>
                {/* Add job positions here */}
              </select>
            </div>

            <div className="form-section">
              <label>Job description</label>
              <div className="description-features">
                <input type="text" placeholder="Job description" className="half-width" />
                <textarea placeholder="Responsibilities" className="half-width"></textarea>
              </div>
            </div>

            <div className="form-section">
              <label>Number accepted</label>
              <input type="number" placeholder="Number of employees" />
            </div>

            <div className="form-section">
              <label>Work format</label>
              <select>
                <option value="">Select format</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
              </select>
            </div>

            <div className="form-section">
              <label>Work location</label>
              <select>
                <option value="">Select location</option>
                {/* Add locations here */}
              </select>
            </div>

            <div className="form-section">
              <label>Salary (Bath)</label>
              <input type="number" placeholder="Salary" />
            </div>

            <div className="form-section">
              <label>Holiday</label>
              <div className="days-of-week">
                <label><input type="checkbox" /> MON</label>
                <label><input type="checkbox" /> TUE</label>
                <label><input type="checkbox" /> WED</label>
                <label><input type="checkbox" /> THU</label>
                <label><input type="checkbox" /> FRI</label>
                <label><input type="checkbox" /> SAT</label>
                <label><input type="checkbox" /> SUN</label>
              </div>
            </div>

            <div className="form-section">
              <label>Working hours</label>
              <input type="text" placeholder="Working hours" />
            </div>

            <div className="form-section">
              <label>Application accepted until</label>
              <input type="date" />
            </div>

            <div className="form-section">
              <label>Gender</label>
              <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-section">
              <label>Age (years)</label>
              <input type="number" placeholder="Age" />
            </div>

            <div className="form-section">
              <label>Education level</label>
              <select>
                <option value="">Select Education level</option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
              </select>
            </div>

            <div className="form-section">
              <label>Additional features</label>
              <div className="description-features">
                <input type="text" placeholder="Additional features" className="half-width" />
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
