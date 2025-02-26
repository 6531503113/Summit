import React, { useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import "./AddAnnouncement.css";

function AddAnnouncement() {
  const navigate = useNavigate();
  
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    axios
      .get("http://localhost:3307/jobs") 
      .then((response) => {
        setJobs(response.data); 
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

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link active"> Personal Information</Link></li>
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
          <h1>Recruiting</h1>
        </header>
        
        <div className="announcement-box">
          {jobs.length > 0 ? (
            <ul className="job-list">
              {jobs.map((job) => (
                <li key={job.id} className="job-item">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <p>Location: {job.location}</p>
                  <p>Accepted: {job.num_accepted}</p>
                  <p>Gender: {job.gender}</p>
                  <p>Salary: {job.salary}</p>
                  <p>Deadline: {job.deadline}</p>
                  <p>Workformat: {job.work_formats}</p>
                  <button className="edit-button" onClick={() => handleEdit(job.id)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(job.id)}>Delete</button> {/* ปุ่มลบ */}
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
