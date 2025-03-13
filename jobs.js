import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import "./jobs.css";

function Jobs() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Employees"); // State to manage selected category

  const handleLogout = () => {
    navigate("/home");
  };

  const handleListClick = () => {
    navigate("/listjobs"); // Navigate to ListJobs page
  };

  // Sample data with categories and positions
  const jobData = [
    { name: "Mr. Somchai Chatthai", education: "Bachelor's degrees", age: 22, experience: "-", position: "Programmer", category: "Employees" },
    { name: "Mr. Pitak Cheiywchay", education: "Education: -", age: 20, experience: "-", position: "System Analyst", category: "Employees" },
    { name: "Ms. Somying Makmee", education: "Bachelor's degrees", age: 27, experience: "2 years", position: "Mobile Developer", category: "Internships", closed: true },
    { name: "Mr. Sudjab Themak", education: "Bachelor's degrees", age: 46, experience: "12 years", position: "Programmer", category: "Internships", closed: true },
  ];

  // Filter jobs based on the selected category
  const filteredJobs = jobData.filter(job => job.category === selectedCategory);

  return (
    <div className="recruitment-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Admin</h2>
        <ul>
          <li><Link to="/personnelinformation" className="sidebar-link">Personal Information</Link></li>
          <li><Link to="/addAnnouncement" className="sidebar-link">Announcement</Link></li>
          <h4>Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link">Check List</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Jobs</h1>
          {/* List Button aligned to the right */}
          <button className="list-button" onClick={handleListClick}>List</button>
        </header>

        {/* Announcement Categories */}
        <div className="announcement-categories">
          <div className="category-tabs">
            <button
              className={`category-tab ${selectedCategory === "Employees" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Employees")}
            >
              Employees
            </button>
            <button
              className={`category-tab ${selectedCategory === "Internships" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Internships")}
            >
              Internships
            </button>
          </div>
        </div>

        {/* Job Status Section */}
        <div className="job-status">
          <div className="job-cards">
            {filteredJobs.map((job, index) => (
              <div key={index} className={`job-card ${job.closed ? "closed" : ""}`}>
                <h4>{job.name}</h4>
                <p className="job-description1">Position: {job.position}</p>
                <p className="job-description2">{job.education}</p>
                <p className="job-description3">Age: {job.age}</p>
                <p className="job-description4">Work experience: {job.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;