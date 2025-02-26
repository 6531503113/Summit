import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./addjob.css"; 

function EditJob() {
  const { jobId } = useParams(); 
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    deadline: "",
    num_accepted: "",
    gender: "",
    work_format_id: "",
    responsibilities: "",
    age_range: "",
    education_level: ""
  });

  useEffect(() => {
    console.log("Fetching data for job ID:", jobId); 
    axios
      .get(`http://localhost:3307/jobs/${jobId}`)
      .then((response) => {
        console.log("Job data:", response.data); 
        setJob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, [jobId]);
  
  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3307/update-job/${jobId}`, job)
      .then((response) => {
        navigate("/addAnnouncement");
      })
      .catch((error) => {
        console.error("Error updating job:", error);
      });
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Recruiting</h2>
        <ul>
          <li><a href="/personnelinformation"><i className="fas fa-user"></i>Personal information</a></li>
          <li><a href="/addAnnouncement">Announcement</a></li>
          <h4>Recruitment</h4>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/examinationresults">Examination results</a></li>
          <li><a href="/checklist">Check list</a></li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={() => navigate("/")}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Recruiting</h1>
        </header>

        <div className="job-form-container">
          <form className="job-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-section left">
                <label>Job position</label>
                <select 
                  className="short-input" 
                  name="title" 
                  value={job.title} 
                  onChange={handleChange}
                >
                  <option value="">Select job position</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                </select>

                <label>Job description</label>
                <textarea 
                  name="description" 
                  value={job.description} 
                  onChange={handleChange} 
                  placeholder="Job description"
                />

                <label>Number accepted</label>
                <input 
                  type="number" 
                  name="num_accepted" 
                  value={job.num_accepted} 
                  onChange={handleChange} 
                  placeholder="Number of employees" 
                />

                <label>Work format</label>
                <select 
                  name="work_format_id" 
                  value={job.work_format_id} 
                  onChange={handleChange}
                >
                  <option value="">Select format</option>
                  <option value="1">Full-time</option>
                  <option value="2">Part-time</option>
                </select>

                <label>Work location</label>
                <select 
                  name="location" 
                  value={job.location} 
                  onChange={handleChange}
                >
                  <option value="">Select location</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Chiang Rai">Chiang Rai</option>
                </select>

                <label>Salary (Bath)</label>
                <input 
                  type="number" 
                  name="salary" 
                  value={job.salary} 
                  onChange={handleChange} 
                  placeholder="Salary" 
                />

                <label>Responsibilities</label>
                <textarea 
                  name="responsibilities" 
                  value={job.responsibilities} 
                  onChange={handleChange} 
                  placeholder="Responsibilities" 
                />
              </div>

              <div className="form-section right">
                <label>Features</label>

                <label>Application accepted until</label>
                <input 
                  type="date" 
                  name="deadline" 
                  value={job.deadline} 
                  onChange={handleChange} 
                />

                <label>Gender</label>
                <select 
                  name="gender" 
                  value={job.gender} 
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="any">Any</option>
                </select>

                <label>Age range</label>
                <input 
                  type="text" 
                  name="age_range" 
                  value={job.age_range} 
                  onChange={handleChange} 
                  placeholder="Age range" 
                />

                <label>Education level</label>
                <select 
                  name="education_level" 
                  value={job.education_level} 
                  onChange={handleChange}
                >
                  <option value="">Select Education level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                </select>
              </div>
            </div>

            <div className="form-buttons">
              <button type="button" className="draft-button">Draft</button>
              <button 
                type="submit" 
                className="save-button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJob;
