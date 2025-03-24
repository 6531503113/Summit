import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"; // เพิ่ม Link
import axios from "axios";
import "./addjob.css";

function AddJob() {
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
    education_level: "",
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
    <div className="addjob-container">
      <aside className="addjob-sidebar">
        <div className="addjob-logo"></div>
        <h2 className="addjob-sidebar-title">Recruiting</h2>
        <ul className="addjob-sidebar-menu">
          <li><Link to="/personnelinformation" className="addjob-sidebar-link">Personnel Information</Link></li>
          <li><Link to="/addAnnouncement" className="addjob-sidebar-link">Announcement</Link></li>
          <h4 className="addjob-sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="addjob-sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="addjob-sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="addjob-sidebar-link">Check List</Link></li>
        </ul>
        <div className="addjob-logout-container">
          <button className="addjob-logout-button" onClick={() => navigate("/")}>Log Out</button>
        </div>
      </aside>

      <div className="addjob-main-content">
        <header className="addjob-header">
          <h1 className="addjob-header-title">Recruiting</h1>
        </header>

        <div className="addjob-form-container">
          <form className="addjob-form" onSubmit={handleSubmit}>
            <div className="addjob-row">
              <div className="addjob-section left">
                <label>Job position</label>
                <select
                  className="addjob-short-input"
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

              <div className="addjob-section right">
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

            <div className="addjob-buttons">
              <button type="submit" className="addjob-save-button">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJob;