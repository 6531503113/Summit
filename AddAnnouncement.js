import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AddAnnouncement.css";

function AddAnnouncement() {
  const navigate = useNavigate();
  
  const [jobs, setJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Employees");

  const fetchJobs = () => {
    axios
      .get("http://localhost:3307/jobs")
      .then((response) => {
        const jobsWithCategory = response.data.map((job, index) => ({
          ...job,
          category: index % 2 === 0 ? "Employees" : "Internships",
        }));
        setJobs(jobsWithCategory);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3307/delete-job/${jobId}`)
        .then((response) => {
          setJobs(jobs.filter((job) => job.id !== jobId));
        })
        .catch((error) => {
          console.error("Error deleting job:", error);
          alert("Error deleting job!");
        });
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleAdd = () => {
    navigate("/addjob");
  };

  const handleEdit = (jobId) => {
    navigate(`/editjob/${jobId}`);
  };

  const handleViewMore = (jobId) => {
    navigate(`/moreannouncement/${jobId}`);
  };

  const filteredJobs = jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link">Personal Information</Link></li>
          <li><Link to="/addAnnouncement" className="sidebar-link">Announcement</Link></li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link">Check List</Link></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Recruiting employees</h1>
        </header>
        
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
        
        <div className="announcement-box">
          {filteredJobs.length > 0 ? (
            <ul className="job-list">
              {filteredJobs.map((job) => (
                <li 
                  key={job.id} 
                  className="job-item"
                  onClick={() => handleViewMore(job.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3>{job.title}</h3>
                  <div className="job-details">
                    <p><strong>Job description:</strong> {job.description}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Number accepted:</strong> {job.num_accepted}</p>
                    <p><strong>Application accepted until:</strong> {new Date(job.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <div className="job-actions">
                    <button
                      className="edit-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(job.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(job.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-announcement">No announcements available</div>
          )}
          <button className="add-button" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddAnnouncement;