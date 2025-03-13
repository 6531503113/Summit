import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./MoreAnnouncement.css";

function MoreAnnouncement() {
  const navigate = useNavigate();
  const { jobId } = useParams(); // Get the job ID from the URL

  const [job, setJob] = useState(null);

  const fetchJob = () => {
    axios
      .get(`http://localhost:3307/jobs/${jobId}`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
        setJob(null); // Ensure job is null if the request fails
      });
  };

  useEffect(() => {
    fetchJob();
  }, [jobId]);

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/addAnnouncement");
  };

  return (
    <div className="more-announcement-container">
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
            <Link to="/examinationresults" className="sidebar-link">
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

      <div className="main-content">
        <header className="header">
          <h1>Announcement History</h1>
        </header>

        <div className="announcement-categories">
          <div className="category-tabs">
            <button className="category-tab active">Employees</button>
            <button className="category-tab">Internships</button>
          </div>
        </div>

        <div className="announcement-details-box">
          <button className="back-button" onClick={handleBack}>
            ←
          </button>
          {job ? (
            <section className="announcement-content">
              <header className="job-header">
                <h2>
                  {job.title} <span className="deadline">Applications accepted until {new Date(job.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </h2>
              </header>

              <section className="job-section">
                <h3>JOB DESCRIPTION</h3>
                <ul className="job-details-list">
                  <li><strong>Number accepted:</strong> {job.num_accepted} positions</li>
                  <li><strong>Work format:</strong> Full-time</li>
                  <li><strong>Location:</strong> {job.location}</li>
                  <li><strong>Salary (Baht):</strong> {job.salary || "20,000 - 50,000"}</li>
                  <li><strong>Holidays:</strong> {job.holidays || "Saturday, Sunday"}</li>
                  <li><strong>Working hours:</strong> {job.working_hours || "08:30 - 17:30"}</li>
                </ul>
              </section>

              <section className="job-section">
                <h3>RESPONSIBILITIES</h3>
                <ul className="job-details-list">
                  <li>{job.description || "Develop work systems in JAVA according to the specified standards and time."}</li>
                  <li>Welcome the new graduates, who are ready to learn and develop themselves.</li>
                </ul>
              </section>

              <section className="job-section">
                <h3>FEATURES</h3>
                <ul className="job-details-list">
                  <li><strong>Gender:</strong> {job.gender || "Not specified"}</li>
                  <li><strong>Age (years):</strong> {job.min_age || "22 years and up"}</li>
                  <li><strong>Education level:</strong> {job.education || "Bachelor's degree - Doctorate degree"}</li>
                  <li><strong>Experience (years):</strong> {job.experience || "Not specified"}</li>
                </ul>
              </section>

              <section className="job-section">
                <h3>ADDITIONAL FEATURES</h3>
                <ul className="job-details-list">
                  <li>{job.additional_features || "Bachelor's degree or higher in computer science or related field."}</li>
                  <li>Have basic knowledge of JAVA, Javascript, HTML/CSS (either side)</li>
                </ul>
              </section>
            </section>
          ) : (
            <div className="no-announcement">
              {job === null ? "Error loading announcement. Please try again." : "Loading announcement..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoreAnnouncement;