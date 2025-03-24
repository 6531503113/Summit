import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./jobs.css";

function Jobs() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Employees");

  const handleLogout = () => {
    navigate("/home");
  };

  const handleListClick = () => {
    navigate("/listjobs");
  };

  const handleJobCardClick = (index) => {
    navigate(`/morejobs/${index}`); // ส่ง index ไปเป็น applicantId
  };

  const jobData = [
    { name: "Mr. Somchai Chatthai", education: "Bachelor's degrees", age: 22, experience: "-", position: "Programmer", category: "Employees" },
    { name: "Mr. Pitak Cheiywchay", education: "Education: -", age: 20, experience: "-", position: "System Analyst", category: "Employees" },
    { name: "Ms. Somying Makmee", education: "Bachelor's degrees", age: 27, experience: "2 years", position: "Mobile Developer", category: "Internships", closed: true },
    { name: "Mr. Sudjab Themak", education: "Bachelor's degrees", age: 46, experience: "12 years", position: "Programmer", category: "Internships", closed: true },
  ];

  const filteredJobs = jobData.filter(job => job.category === selectedCategory);

  return (
    <div className="jobs-container">
      <aside className="jobs-sidebar">
        <div className="jobs-logo"></div>
        <h2 className="jobs-sidebar-title">Admin</h2>
        <ul className="jobs-sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="jobs-sidebar-link">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="jobs-sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="jobs-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="jobs-sidebar-link active">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/examinationresults" className="jobs-sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="jobs-sidebar-link">
              Check List
            </Link>
          </li>
        </ul>
        <div className="jobs-logout-container">
          <button className="jobs-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="jobs-main-content">
        <header className="jobs-header">
          <h1 className="jobs-header-title">Jobs</h1>
          <button className="jobs-list-button" onClick={handleListClick}>
            List
          </button>
        </header>

        <div className="jobs-announcement-categories">
          <div className="jobs-category-tabs">
            <button
              className={`jobs-category-tab ${selectedCategory === "Employees" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Employees")}
            >
              Employees
            </button>
            <button
              className={`jobs-category-tab ${selectedCategory === "Internships" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Internships")}
            >
              Internships
            </button>
          </div>
        </div>

        <div className="jobs-job-status">
          <div className="jobs-job-cards">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className={`jobs-job-card ${job.closed ? "closed" : ""}`}
                onClick={() => handleJobCardClick(index)} // เพิ่ม onClick เพื่อนำทางไปหน้า MoreJobs
                style={{ cursor: "pointer" }} // เพิ่ม cursor เพื่อบ่งบอกว่าคลิกได้
              >
                <h4>{job.name}</h4>
                <p className="jobs-job-description1">Position: {job.position}</p>
                <p className="jobs-job-description2">{job.education}</p>
                <p className="jobs-job-description3">Age: {job.age}</p>
                <p className="jobs-job-description4">Work experience: {job.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;