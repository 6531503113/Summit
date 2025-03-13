import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./checklist.css";

function CheckList() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the applicants from the navigation state (if passed from ExaminationResults)
  const { selectedApplicants = [] } = location.state || {};

  // Filter applicants with totalScore >= 150 (or use your own criteria)
  const qualifiedApplicants = selectedApplicants.length > 0
    ? selectedApplicants.filter(applicant => applicant.totalScore >= 150)
    : [
        { name: "Ms. Somying Makmee" },
        { name: "Mr. Sudjab Themak" },
      ];

  // Initialize checklist state for qualified applicants
  const initialChecklist = qualifiedApplicants.reduce((acc, applicant) => {
    acc[applicant.name] = {
      employeeCard: false,
      email: false,
      vpn: false,
      notebook: false,
    };
    return acc;
  }, {});

  const [checklist, setChecklist] = useState(initialChecklist);

  const handleLogout = () => {
    navigate("/");
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
    navigate("/jobs"); // Navigate back to jobs or another page
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link">Personnel Information</Link></li>
          <li><Link to="/addAnnouncement" className="sidebar-link">Announcement</Link></li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link active">Check List</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">Check List of Qualified Programmers</h1>
        </header>

        {/* Checklist Section */}
        <div className="checklist-section">
          {Object.entries(checklist).length > 0 ? (
            <table className="checklist-table">
              <thead>
                <tr>
                  <th>Applicant Name</th>
                  <th>Employee Card</th>
                  <th>Email</th>
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
                        className="checklist-input"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={fields.email}
                        onChange={() => handleCheckboxChange(name, "email")}
                        className="checklist-input"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={fields.vpn}
                        onChange={() => handleCheckboxChange(name, "vpn")}
                        className="checklist-input"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={fields.notebook}
                        onChange={() => handleCheckboxChange(name, "notebook")}
                        className="checklist-input"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-applicants">
              No applicants qualified for the checklist.
            </div>
          )}
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CheckList;