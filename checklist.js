import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./checklist.css";

function CheckList() {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedApplicants = [] } = location.state || {};

  const qualifiedApplicants = selectedApplicants.length > 0
    ? selectedApplicants.filter(applicant => applicant.totalScore >= 150)
    : [
        { name: "Ms. Somying Makmee" },
        { name: "Mr. Sudjab Themak" },
      ];

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
    alert("Checklist saved successfully!");
    navigate("/jobs");
  };

  return (
    <div className="checklist-container">
      <aside className="checklist-sidebar">
        <div className="checklist-logo"></div>
        <h2 className="checklist-sidebar-title">Admin</h2>
        <ul className="checklist-sidebar-menu">
          <li><Link to="/personnelinformation" className="checklist-sidebar-link">Personnel Information</Link></li>
          <li><Link to="/addAnnouncement" className="checklist-sidebar-link">Announcement</Link></li>
          <h4 className="checklist-sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="checklist-sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="checklist-sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="checklist-sidebar-link active">Check List</Link></li>
        </ul>
        <div className="checklist-logout-container">
          <button className="checklist-logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="checklist-main-content">
        <header className="checklist-header">
          <h1 className="checklist-header-title">Check List of Qualified Programmers</h1>
        </header>

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
            <div className="checklist-no-applicants">
              No applicants qualified for the checklist.
            </div>
          )}
          <button className="checklist-save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CheckList;