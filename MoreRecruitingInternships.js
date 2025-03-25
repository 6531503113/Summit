import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./MoreRecruitingInternships.css";

function MoreRecruitingInternships() {
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
    navigate("/applyrecruitinginternships", { state: { job } });
  };

  if (!job) {
    return <div>No job details available.</div>;
  }

  return (
    <div className="MoreRecruitingInternships-container">
      <aside className="MoreRecruitingInternships-sidebar">
        <div className="MoreRecruitingInternships-logo"></div>
        <h2 className="MoreRecruitingInternships-sidebar-title">User</h2>
        <ul className="MoreRecruitingInternships-sidebar-menu">
          <h4 className="MoreRecruitingInternships-sidebar-subheader">Recruitment</h4>
          <li>
            <Link
              to="/recruitingemployees"
              className={`MoreRecruitingInternships-sidebar-link ${
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
              className={`MoreRecruitingInternships-sidebar-link ${
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
          <h4 className="MoreRecruitingInternships-sidebar-subheader">Status</h4>
          <li>
            <Link
              to="/applicantstatus"
              className={`MoreRecruitingInternships-sidebar-link ${
                location.pathname === "/applicantstatus" ? "active" : ""
              }`}
            >
              Applicant status
            </Link>
          </li>
          <h4 className="MoreRecruitingInternships-sidebar-subheader">Information</h4>
          <li>
            <Link
              to="/profile"
              className={`MoreRecruitingInternships-sidebar-link ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="MoreRecruitingInternships-logout-container">
          <button className="MoreRecruitingInternships-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="MoreRecruitingInternships-main-content">
        <header className="MoreRecruitingInternships-header">
          <h1 className="MoreRecruitingInternships-header-title">Recruiting Internships</h1>
        </header>

        <div className="MoreRecruitingInternships-job-details">
          <div className="MoreRecruitingInternships-job-header">
            <div className="MoreRecruitingInternships-job-title-container">
              <h2 className="MoreRecruitingInternships-job-title">{job.title}</h2>
              <p className="MoreRecruitingInternships-job-deadline">
                Applications accepted until 31/10/2024
              </p>
            </div>
            <button className="MoreRecruitingInternships-apply-button" onClick={handleApply}>
              Apply for Work
            </button>
          </div>

          <div className="MoreRecruitingInternships-job-description">
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
                  <li>Able to code in any languages, such as Java, JavaScript, Python etc.</li>
                  <li>Experience in automating testing on mobile apps, Android apps.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="MoreRecruitingInternships-job-feature">
            <h3>Features:</h3>
            <ul>
              <li>Gender: Not specified</li>
              <li>Age: 20 years old and up</li>
              <li>Education level: Currently pursuing a Bachelor's degree in Computer Science or related field</li>
              <li>Experience: Not required</li>
            </ul>
          </div>

          <div className="MoreRecruitingInternships-job-additional">
            <h3>Additional Features:</h3>
            <ul>
              <li>Basic knowledge in IT, Computer Science or other related fields</li>
              <li>Outstanding drive and communication skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreRecruitingInternships;