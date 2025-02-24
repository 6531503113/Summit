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
    alert("Checklist saved successfully!");
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/profile" className="sidebar-link"><i className="fas fa-user"></i> Personal Information</Link></li>
          <li><Link to="/announcement" className="sidebar-link">Announcement</Link></li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/exam-results" className="sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link active">Check List</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1 className="header-title">The check list of Programmer</h1>
        </header>

        <div className="checklist-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Make employee card</th>
                <th>e-mail</th>
                <th>VPN</th>
                <th>Notebook</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(checklist).map(([name, fields]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={fields.employeeCard}
                      onChange={() => handleCheckboxChange(name, "employeeCard")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={fields.email}
                      onChange={() => handleCheckboxChange(name, "email")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={fields.vpn}
                      onChange={() => handleCheckboxChange(name, "vpn")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={fields.notebook}
                      onChange={() => handleCheckboxChange(name, "notebook")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default CheckList;  