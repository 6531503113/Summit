import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ListJobs.css";

function ListJobs() {
  const navigate = useNavigate();

  const applicantsList = [
    { name: "Mr. Somchai Chatthai", age: 22, education: "Bachelor's degrees", experience: "-" },
    { name: "Ms. Sornying Makmee", age: 27, education: "Bachelor's degrees", experience: "2 years" },
    { name: "Mr. Pitak Chiewchay", age: 20, education: "-", experience: "-" },
    { name: "Mr. Sudjab Themak", age: 46, education: "Bachelor's degrees", experience: "12 years" },
  ];

  const [selectedApplicants, setSelectedApplicants] = useState([]);

  const handleCheckboxChange = (applicant, isChecked) => {
    if (isChecked) {
      setSelectedApplicants([...selectedApplicants, applicant]);
    } else {
      setSelectedApplicants(selectedApplicants.filter((a) => a.name !== applicant.name));
    }
  };

  const handleLogout = () => {
    navigate("/home");
  };

  const handleSubmit = () => {
    if (selectedApplicants.length === 0) {
      alert("Please select at least one applicant before submitting.");
      return;
    }
    navigate("/submitexam", { state: { selectedApplicants } });
  };

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
          <h1>The List of Applicants for Programmer</h1>
        </header>

        <div className="applicants-list">
          {applicantsList.map((applicant, index) => (
            <div className="applicant" key={index}>
              <input
                type="checkbox"
                name="applicant"
                id={`applicant${index + 1}`}
                onChange={(e) => handleCheckboxChange(applicant, e.target.checked)}
              />
              <label htmlFor={`applicant${index + 1}`} className="applicant-label">
                {applicant.name} / Age {applicant.age} / {applicant.education} / Experience {applicant.experience}
              </label>
              <button className="portfolio-button">Portfolio</button>
            </div>
          ))}
        </div>

        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ListJobs;