import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./RecruitingInternships.css";

function RecruitingInternships() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const jobData = [
    {
      title: "Programmer",
      description: "Full-time",
      location: "Bangkok (Bang Rak District)",
      salary: "As agreed",
      holiday: "Saturday, Sunday",
      hours: "08:30 - 17:30",
      posted: "3 day ago",
    },
    {
      title: "Tester (QA)",
      description: "Full-time",
      location: "Bangkok (Bang Rak District)",
      salary: "As agreed",
      holiday: "Saturday, Sunday",
      hours: "08:30 - 17:30",
      posted: "3 day ago",
    },
    {
      title: "Web Developer",
      description: "Full-time",
      location: "Bangkok (Bang Rak District)",
      salary: "As agreed",
      holiday: "Saturday, Sunday",
      hours: "08:30 - 17:30",
      posted: "3 day ago",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleJobClick = (job) => {
    navigate("/morerecruitinginternships", { state: { job } });
  };

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="RecruitingInternships-container">
      <aside className="RecruitingInternships-sidebar">
        <div className="RecruitingInternships-logo"></div>
        <h2 className="RecruitingInternships-sidebar-title">User</h2>
        <ul className="RecruitingInternships-sidebar-menu">
          <h4 className="RecruitingInternships-sidebar-subheader">Recruitment</h4>
          <li>
            <Link
              to="/recruitingemployees"
              className={`RecruitingInternships-sidebar-link ${
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
              className={`RecruitingInternships-sidebar-link ${
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
          <h4 className="RecruitingInternships-sidebar-subheader">Status</h4>
          <li>
            <Link
              to="/applicantstatus"
              className={`RecruitingInternships-sidebar-link ${
                location.pathname === "/applicantstatus" ? "active" : ""
              }`}
            >
              Applicant status
            </Link>
          </li>
          <h4 className="RecruitingInternships-sidebar-subheader">Information</h4>
          <li>
            <Link
              to="/profile"
              className={`RecruitingInternships-sidebar-link ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="RecruitingInternships-logout-container">
          <button className="RecruitingInternships-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="RecruitingInternships-main-content">
        <header className="RecruitingInternships-header">
          <h1 className="RecruitingInternships-header-title">Recruitment Internships</h1>
        </header>

        <div className="RecruitingInternships-header-controls">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="RecruitingInternships-search-input"
          />
        </div>

        <div className="RecruitingInternships-job-list">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="RecruitingInternships-job-item"
              onClick={() => handleJobClick(job)}
            >
              <h3 className="RecruitingInternships-job-title">{job.title}</h3>
              <p className="RecruitingInternships-job-detail">
                <strong>Job description:</strong> {job.description}
              </p>
              <p className="RecruitingInternships-job-detail">
                <strong>Work location:</strong> {job.location}
              </p>
              <p className="RecruitingInternships-job-detail">
                <strong>Salary(฿aht):</strong> {job.salary}
              </p>
              <p className="RecruitingInternships-job-detail">
                <strong>Holiday:</strong> {job.holiday}
              </p>
              <p className="RecruitingInternships-job-detail">
                <strong>Working hours:</strong> {job.hours}
              </p>
              <p className="RecruitingInternships-job-posted">{job.posted}</p>
              <button
                className="RecruitingInternships-see-more-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleJobClick(job);
                }}
              >
                See more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruitingInternships;