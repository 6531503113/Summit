import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./SubmitExam.css";

function SubmitExam() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the selected applicants from the navigation state
  const { selectedApplicants = [] } = location.state || {};

  // Initialize state with the selected applicants, adding default values for examDate, interviewDate, and interviewTime
  const [applicants, setApplicants] = useState(
    selectedApplicants.length > 0
      ? selectedApplicants.map((applicant) => ({
          ...applicant,
          examDate: applicant.examDate || "",
          interviewDate: applicant.interviewDate || "",
          interviewTime: applicant.interviewTime || "",
        }))
      : []
  );

  // Handle input changes for each applicant
  const handleInputChange = (index, field, value) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[index] = { ...updatedApplicants[index], [field]: value };
    setApplicants(updatedApplicants);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    // You can add logic here to save the data (e.g., send to an API)
    console.log("Submitted Applicants:", applicants);
    // Navigate to the examination results page after submission
    navigate("/examinationresults");
  };

  return (
    <div className="submit-exam-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="sidebar-link">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="sidebar-link">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/examinationresults" className="sidebar-link active">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="sidebar-link">
              Check List
            </Link>
          </li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Schedule the Exam Date</h1>
        </header>

        {/* Applicants Table */}
        <div className="exam-schedule-box">
          {applicants.length > 0 ? (
            <>
              <table className="exam-table">
                <thead>
                  <tr>
                    <th>Applicant Name</th>
                    <th>Exam Date</th>
                    <th>Interview Date</th>
                    <th>Interview Time</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((applicant, index) => (
                    <tr key={index}>
                      <td>{applicant.name}</td>
                      <td>
                        <input
                          type="text"
                          value={applicant.examDate}
                          onChange={(e) => handleInputChange(index, "examDate", e.target.value)}
                          placeholder="DD/MM/YY"
                          className="exam-input"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={applicant.interviewDate}
                          onChange={(e) => handleInputChange(index, "interviewDate", e.target.value)}
                          placeholder="DD/MM/YY"
                          className="exam-input"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={applicant.interviewTime}
                          onChange={(e) => handleInputChange(index, "interviewTime", e.target.value)}
                          placeholder="HH.MM-HH.MM"
                          className="exam-input"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </>
          ) : (
            <div className="no-applicants">
              No applicants selected. Please go back and select at least one applicant.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubmitExam;