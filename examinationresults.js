import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./examinationresults.css";

function ExaminationResults() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the applicants from the navigation state (if passed from SubmitExam)
  const { selectedApplicants = [] } = location.state || {};

  // Initialize state with static data if no applicants are passed
  const initialApplicants = selectedApplicants.length > 0
    ? selectedApplicants.map(applicant => ({
        ...applicant,
        examScore: 0,
        interviewScore: 0,
        totalScore: 0,
      }))
    : [
        { name: "Mr. Somchai Chatthai", examScore: 0, interviewScore: 78, totalScore: 78 },
        { name: "Ms. Suriying Makmee", examScore: 97, interviewScore: 33, totalScore: 130 },
        { name: "Mr. Sudjab Themak", examScore: 99, interviewScore: 98, totalScore: 197 },
      ];

  const [applicants, setApplicants] = useState(initialApplicants);

  // Handle input changes for exam and interview scores
  const handleScoreChange = (index, field, value) => {
    const updatedApplicants = [...applicants];
    const newValue = parseInt(value) || 0; // Convert to number, default to 0 if invalid
    updatedApplicants[index] = { ...updatedApplicants[index], [field]: newValue };

    // Calculate total score
    updatedApplicants[index].totalScore =
      updatedApplicants[index].examScore + updatedApplicants[index].interviewScore;

    setApplicants(updatedApplicants);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    // You can add logic here to save the data (e.g., send to an API)
    console.log("Submitted Scores:", applicants);
    // Navigate to the next page (e.g., checklist)
    navigate("/checklist");
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
          <li><Link to="/examinationresults" className="sidebar-link active">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link">Check List</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>The Result </h1>
        </header>

        {/* Applicants Table */}
        <div className="results-table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Exam Score</th>
                <th>Interview Score</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={index}>
                  <td>{applicant.name}</td>
                  <td>
                    <input
                      type="number"
                      value={applicant.examScore}
                      onChange={(e) => handleScoreChange(index, "examScore", e.target.value)}
                      className="score-input"
                      min="0"
                      max="100"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={applicant.interviewScore}
                      onChange={(e) => handleScoreChange(index, "interviewScore", e.target.value)}
                      className="score-input"
                      min="0"
                      max="100"
                    />
                  </td>
                  <td>{applicant.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExaminationResults;