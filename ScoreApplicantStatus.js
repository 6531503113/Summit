import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./ScoreApplicantStatus.css";

function ScoreApplicantStatus() {
  const navigate = useNavigate();
  const location = useLocation();
  const { applicant } = location.state || {}; // Get the applicant data from state

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/applicantstatus"); // Navigate back to ApplicantStatus
  };

  const handleAddDocument = () => {
    // Navigate to AddDocumentApplicantStatus with the applicant data
    navigate("/adddocumentapplicantstatus", { state: { applicant } });
  };

  // Sample data for the table (same as ApplicantStatus for background)
  const applicantData = [
    {
      position: "Programmer",
      examDate: "17/10/69",
      interviewDate: "17/10/69",
      interviewTime: "15.00-16.00",
      result: "Pass",
      resultColor: "green",
    },
    {
      position: "Mobile Developer",
      examDate: "unqualified",
      interviewDate: "unqualified",
      interviewTime: "unqualified",
      result: "unqualified",
      resultColor: "red",
    },
  ];

  return (
    <div className="ScoreApplicantStatus-container">
      <aside className="ScoreApplicantStatus-sidebar">
        <div className="ScoreApplicantStatus-logo"></div>
        <h2 className="ScoreApplicantStatus-sidebar-title">User</h2>
        <ul className="ScoreApplicantStatus-sidebar-menu">
          <h4 className="ScoreApplicantStatus-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/recruitingemployees" className="ScoreApplicantStatus-sidebar-link">
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link to="/recruitinginternships" className="ScoreApplicantStatus-sidebar-link">
              Recruiting internships
            </Link>
          </li>
          <h4 className="ScoreApplicantStatus-sidebar-subheader">Status</h4>
          <li>
            <Link to="/applicantstatus" className="ScoreApplicantStatus-sidebar-link active">
              Applicant status
            </Link>
          </li>
          <h4 className="ScoreApplicantStatus-sidebar-subheader">Information</h4>
          <li>
            <Link to="/profile" className="ScoreApplicantStatus-sidebar-link">
              Profile
            </Link>
          </li>
        </ul>
        <div className="ScoreApplicantStatus-logout-container">
          <button className="ScoreApplicantStatus-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="ScoreApplicantStatus-main-content">
        <header className="ScoreApplicantStatus-header">
          <h1 className="ScoreApplicantStatus-header-title">Applicant Status</h1>
        </header>

        <div className="ScoreApplicantStatus-table-container">
          <table className="ScoreApplicantStatus-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Exam date</th>
                <th>Interview date</th>
                <th>Interview time</th>
                <th>Result</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {applicantData.map((applicant, index) => (
                <tr key={index}>
                  <td>{applicant.position}</td>
                  <td>{applicant.examDate}</td>
                  <td>{applicant.interviewDate}</td>
                  <td>{applicant.interviewTime}</td>
                  <td style={{ color: applicant.resultColor }}>{applicant.result}</td>
                  <td>
                    <button className="ScoreApplicantStatus-score-button" disabled>
                      Score
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Overlay for Scores */}
        <div className="ScoreApplicantStatus-modal-overlay">
          <div className="ScoreApplicantStatus-modal">
            <button className="ScoreApplicantStatus-back-button" onClick={handleBack}>
              ←
            </button>
            <h2 className="ScoreApplicantStatus-modal-title">{applicant?.position}</h2>
            <div className="ScoreApplicantStatus-score-item">
              <span>Exam Score</span>
              <span>{applicant?.scores?.examScore || 0}</span>
            </div>
            <div className="ScoreApplicantStatus-score-item">
              <span>Interview Score</span>
              <span>{applicant?.scores?.interviewScore || 0}</span>
            </div>
            <div className="ScoreApplicantStatus-score-item total">
              <span>TOTAL</span>
              <span>{applicant?.scores?.totalScore || 0}</span>
            </div>
            <button
              className="ScoreApplicantStatus-add-document-button"
              onClick={handleAddDocument}
            >
              Add Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreApplicantStatus;