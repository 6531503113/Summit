import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./MoreRecruitingEmployees.css";

function MoreRecruitingEmployees() {
  const navigate = useNavigate();
  const location = useLocation();
  const { job } = location.state || {};

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleApply = () => {
    navigate("/applyrecruitingemployees", { state: { job } });
  };

  if (!job) {
    return <div>No job details available.</div>;
  }

  return (
    <div className="MoreRecruitingEmployees-container">
      <aside className="MoreRecruitingEmployees-sidebar">
        <div className="MoreRecruitingEmployees-logo"></div>
        <h2 className="MoreRecruitingEmployees-sidebar-title">User</h2>
        <ul className="MoreRecruitingEmployees-sidebar-menu">
          <h4 className="MoreRecruitingEmployees-sidebar-subheader">Recruitment</h4>
          <li>
            <Link
              to="/recruitingemployees"
              className={`MoreRecruitingEmployees-sidebar-link ${
                location.pathname === "/recruitingemployees" ||
                location.pathname === "/morerecruitingemployees" ||
                location.pathname === "/applyrecruitingemployees"
                  ? "active"
                  : ""
              }`}
            >
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link
              to="/recruitinginternships"
              className={`MoreRecruitingEmployees-sidebar-link ${
                location.pathname === "/recruitinginternships" ||
                location.pathname === "/morerecruitinginternships" ||
                location.pathname === "/applyrecruitinginternships"
                  ? "active"
                  : ""
              }`}
            >
              Recruiting internships
            </Link>
          </li>
          <h4 className="MoreRecruitingEmployees-sidebar-subheader">Status</h4>
          <li>
            <Link
              to="/applicantstatus"
              className={`MoreRecruitingEmployees-sidebar-link ${
                location.pathname === "/applicantstatus" ? "active" : ""
              }`}
            >
              Applicant status
            </Link>
          </li>
          <h4 className="MoreRecruitingEmployees-sidebar-subheader">Information</h4>
          <li>
            <Link
              to="/profile"
              className={`MoreRecruitingEmployees-sidebar-link ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="MoreRecruitingEmployees-logout-container">
          <button className="MoreRecruitingEmployees-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="MoreRecruitingEmployees-main-content">
        <header className="MoreRecruitingEmployees-header">
          <h1 className="MoreRecruitingEmployees-header-title">Recruiting Employees</h1>
        </header>

        <div className="MoreRecruitingEmployees-job-details">
          <div className="MoreRecruitingEmployees-job-header">
            <div className="MoreRecruitingEmployees-job-title-container">
              <h2 className="MoreRecruitingEmployees-job-title">{job.title}</h2>
              <p className="MoreRecruitingEmployees-job-deadline">
                Applications accepted until 31/10/2024
              </p>
            </div>
            <button className="MoreRecruitingEmployees-apply-button" onClick={handleApply}>
              Apply for Work
            </button>
          </div>

          <div className="MoreRecruitingEmployees-job-description">
            <h3>Job Description:</h3>
            <ul>
              <li>Number accepted position: 3</li>
              <li>Work location: {job.location}</li>
              <li>Salary: {job.salary}</li>
              <li>Holiday: {job.holiday}</li>
              <li>Working hours: {job.hours}</li>
              <li>
                Responsibilities:
                <ul>
                  <li>Develop web systems using Java, focusing on specific technical and team requirements.</li>
                  <li>Welcome new graduates who are ready to learn and develop themselves.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="MoreRecruitingEmployees-job-feature">
            <h3>Features:</h3>
            <ul>
              <li>Gender: Not specified</li>
              <li>Age: 22 years old and up</li>
              <li>Education level: Bachelor's degree, Computer Science or related field</li>
              <li>Experience: Not required</li>
            </ul>
          </div>

          <div className="MoreRecruitingEmployees-job-additional">
            <h3>Additional Features:</h3>
            <ul>
              <li>Have basic knowledge of Java, Spring, HTML/CSS, and server-side development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreRecruitingEmployees;