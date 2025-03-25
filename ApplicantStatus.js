import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ApplicantStatus.css";

function ApplicantStatus() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  // Sample data for the table (you can replace this with real data from an API)
  const applicantData = [
    {
      position: "Programmer",
      examDate: "17/10/69",
      interviewDate: "17/10/69",
      interviewTime: "15.00-16.00",
      result: "Pass",
      resultColor: "green",
      scores: {
        examScore: 90,
        interviewScore: 65,
        totalScore: 155,
      },
    },
    {
      position: "Mobile Developer",
      examDate: "unqualified",
      interviewDate: "unqualified",
      interviewTime: "unqualified",
      result: "unqualified",
      resultColor: "red",
      scores: {
        examScore: 0,
        interviewScore: 0,
        totalScore: 0,
      },
    },
  ];

  const handleScoreClick = (applicant) => {
    // Navigate to ScoreApplicantStatus with the applicant's data
    navigate("/scoreapplicantstatus", { state: { applicant } });
  };

  return (
    <div className="ApplicantStatus-container">
      <aside className="ApplicantStatus-sidebar">
        <div className="ApplicantStatus-logo"></div>
        <h2 className="ApplicantStatus-sidebar-title">User</h2>
        <ul className="ApplicantStatus-sidebar-menu">
          <h4 className="ApplicantStatus-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/recruitingemployees" className="ApplicantStatus-sidebar-link">
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link to="/recruitinginternships" className="ApplicantStatus-sidebar-link">
              Recruiting internships
            </Link>
          </li>
          <h4 className="ApplicantStatus-sidebar-subheader">Status</h4>
          <li>
            <Link to="/applicantstatus" className="ApplicantStatus-sidebar-link active">
              Applicant status
            </Link>
          </li>
          <h4 className="ApplicantStatus-sidebar-subheader">Information</h4>
          <li>
            <Link to="/profile" className="ApplicantStatus-sidebar-link">
              Profile
            </Link>
          </li>
        </ul>
        <div className="ApplicantStatus-logout-container">
          <button className="ApplicantStatus-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="ApplicantStatus-main-content">
        <header className="ApplicantStatus-header">
          <h1 className="ApplicantStatus-header-title">Applicant Status</h1>
        </header>

        <div className="ApplicantStatus-table-container">
          <table className="ApplicantStatus-table">
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
                    <button
                      className="ApplicantStatus-score-button"
                      onClick={() => handleScoreClick(applicant)}
                    >
                      Score
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApplicantStatus;