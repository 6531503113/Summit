import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./examinationresults.css";

function ExaminationResults() {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedApplicants = [] } = location.state || {};

  const initialApplicants = selectedApplicants.length > 0
    ? selectedApplicants.map((applicant) => ({
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

  const handleScoreChange = (index, field, value) => {
    const updatedApplicants = [...applicants];
    const newValue = parseInt(value) || 0;
    updatedApplicants[index] = { ...updatedApplicants[index], [field]: newValue };
    updatedApplicants[index].totalScore =
      updatedApplicants[index].examScore + updatedApplicants[index].interviewScore;
    setApplicants(updatedApplicants);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    console.log("Submitted Scores:", applicants);
    navigate("/checklist");
  };

  return (
    <div className="examinationresults-container">
      <aside className="examinationresults-sidebar">
        <div className="examinationresults-logo"></div>
        <h2 className="examinationresults-sidebar-title">Admin</h2>
        <ul className="examinationresults-sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="examinationresults-sidebar-link">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="examinationresults-sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="examinationresults-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="examinationresults-sidebar-link">
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/examinationresults"
              className="examinationresults-sidebar-link active"
            >
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="examinationresults-sidebar-link">
              Check List
            </Link>
          </li>
        </ul>
        <div className="examinationresults-logout-container">
          <button
            className="examinationresults-logout-button"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </aside>

      <div className="examinationresults-main-content">
        <header className="examinationresults-header">
          <h1 className="examinationresults-header-title">The Result</h1>
        </header>

        <div className="examinationresults-results-table-container">
          <table className="examinationresults-results-table">
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
                      onChange={(e) =>
                        handleScoreChange(index, "examScore", e.target.value)
                      }
                      className="examinationresults-score-input"
                      min="0"
                      max="100"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={applicant.interviewScore}
                      onChange={(e) =>
                        handleScoreChange(index, "interviewScore", e.target.value)
                      }
                      className="examinationresults-score-input"
                      min="0"
                      max="100"
                    />
                  </td>
                  <td>{applicant.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="examinationresults-submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExaminationResults;