import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./checklist.css";

function CheckList() {
  const navigate = useNavigate();
  const [checklist, setChecklist] = useState({
    "Ms. Somying Makmee": {
      employeeCard: true,
      email: true,
      vpn: true,
      notebook: false,
    },
    "Mr. Sudjab Themak": {
      employeeCard: true,
      email: true,
      vpn: false,
      notebook: false,
    },
  });

  const handleLogout = () => {
    navigate("/home");
  };

  const handleCheckboxChange = (name, field) => {
    setChecklist((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [field]: !prev[name][field],
      },
    }));
  };

  const handleSave = () => {
    console.log("Checklist saved:", checklist);
    // Add your save logic here (e.g., API call)
    alert("Checklist saved successfully!");
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link">Personal Information</Link></li>
          <li><Link to="/addAnnouncement" className="sidebar-link">Announcement</Link></li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link">Check List</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">The check list of Programmer</h1>
        </header>

        {/* Checklist Section */}
        <div className="checklist-section">
          {Object.entries(checklist).map(([name, fields]) => (
            <div key={name} className="checklist-row">
              <span className="name-label">{name}</span>
              <div className="checkbox-group">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={fields.employeeCard}
                    onChange={() => handleCheckboxChange(name, "employeeCard")}
                  />
                  <span>Make employee card</span>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={fields.email}
                    onChange={() => handleCheckboxChange(name, "email")}
                  />
                  <span>e-mail</span>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={fields.vpn}
                    onChange={() => handleCheckboxChange(name, "vpn")}
                  />
                  <span>VPN</span>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={fields.notebook}
                    onChange={() => handleCheckboxChange(name, "notebook")}
                  />
                  <span>Notebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default CheckList;