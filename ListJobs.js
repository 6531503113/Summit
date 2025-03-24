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
    <div className="listjobs-container">
      <aside className="listjobs-sidebar">
        <div className="listjobs-logo"></div>
        <h2 className="listjobs-sidebar-title">Admin</h2>
        <ul className="listjobs-sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="listjobs-sidebar-link">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="listjobs-sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="listjobs-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="listjobs-sidebar-link">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/examinationresults" className="listjobs-sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="listjobs-sidebar-link">
              Check List
            </Link>
          </li>
        </ul>
        <div className="listjobs-logout-container">
          <button className="listjobs-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="listjobs-main-content">
        <header className="listjobs-header">
          <h1 className="listjobs-header-title">The List of Applicants for Programmer</h1>
        </header>

        <div className="listjobs-applicants-list">
          {applicantsList.map((applicant, index) => (
            <div className="listjobs-applicant" key={index}>
              <input
                type="checkbox"
                name="applicant"
                id={`applicant${index + 1}`}
                onChange={(e) => handleCheckboxChange(applicant, e.target.checked)}
              />
              <label htmlFor={`applicant${index + 1}`} className="listjobs-applicant-label">
                {applicant.name} / Age {applicant.age} / {applicant.education} / Experience {applicant.experience}
              </label>
              <button className="listjobs-portfolio-button">Portfolio</button>
            </div>
          ))}
        </div>

        <button className="listjobs-submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ListJobs;