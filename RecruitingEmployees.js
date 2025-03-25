import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./RecruitingEmployees.css";

function RecruitingEmployees() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const jobData = [
    {
      title: "Programmer",
      description: "Full-time",
      location: "Bangkok (Bang Rak District)",
      salary: "20,000 - 50,000",
      holiday: "Saturday, Sunday",
      hours: "08:30 - 17:30",
      posted: "3 day ago",
    },
    {
      title: "Mobile Developer",
      description: "Full-time",
      location: "Bangkok (Bang Rak District)",
      salary: "As agreed",
      holiday: "Saturday, Sunday",
      hours: "08:30 - 17:30",
      posted: "3 day ago",
    },
    {
      title: "System Analyst",
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
    navigate("/morerecruitingemployees", { state: { job } });
  };

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="RecruitingEmployees-container">
      <aside className="RecruitingEmployees-sidebar">
        <div className="RecruitingEmployees-logo"></div>
        <h2 className="RecruitingEmployees-sidebar-title">User</h2>
        <ul className="RecruitingEmployees-sidebar-menu">
          <h4 className="RecruitingEmployees-sidebar-subheader">Recruitment</h4>
          <li>
            <Link
              to="/recruitingemployees"
              className={`RecruitingEmployees-sidebar-link ${
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
              className={`RecruitingEmployees-sidebar-link ${
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
          <h4 className="RecruitingEmployees-sidebar-subheader">Status</h4>
          <li>
            <Link
              to="/applicantstatus"
              className={`RecruitingEmployees-sidebar-link ${
                location.pathname === "/applicantstatus" ? "active" : ""
              }`}
            >
              Applicant status
            </Link>
          </li>
          <h4 className="RecruitingEmployees-sidebar-subheader">Information</h4>
          <li>
            <Link
              to="/profile"
              className={`RecruitingEmployees-sidebar-link ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="RecruitingEmployees-logout-container">
          <button className="RecruitingEmployees-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="RecruitingEmployees-main-content">
        <header className="RecruitingEmployees-header">
          <h1 className="RecruitingEmployees-header-title">Recruitment Employees</h1>
        </header>

        <div className="RecruitingEmployees-header-controls">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="RecruitingEmployees-search-input"
          />
        </div>

        <div className="RecruitingEmployees-job-list">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="RecruitingEmployees-job-item"
              onClick={() => handleJobClick(job)}
            >
              <h3 className="RecruitingEmployees-job-title">{job.title}</h3>
              <p className="RecruitingEmployees-job-detail">
                <strong>Job description:</strong> {job.description}
              </p>
              <p className="RecruitingEmployees-job-detail">
                <strong>Work location:</strong> {job.location}
              </p>
              <p className="RecruitingEmployees-job-detail">
                <strong>Salary(฿aht):</strong> {job.salary}
              </p>
              <p className="RecruitingEmployees-job-detail">
                <strong>Holiday:</strong> {job.holiday}
              </p>
              <p className="RecruitingEmployees-job-detail">
                <strong>Working hours:</strong> {job.hours}
              </p>
              <p className="RecruitingEmployees-job-posted">{job.posted}</p>
              <button
                className="RecruitingEmployees-see-more-button"
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

export default RecruitingEmployees;