import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./MoreJobs.css";

function MoreJobs() {
  const navigate = useNavigate();
  const { applicantId } = useParams(); // รับ applicantId จาก URL

  // ข้อมูลจำลอง (เหมือนใน Jobs.js)
  const jobData = [
    {
      name: "Mr. Somchai Chatthai",
      education_level: "Bachelor's degrees",
      age: 22,
      experience: "-",
      position: "Programmer",
      category: "Employees",
      contact: "0946384628",
      email: "JJ@gmail.com",
      dob: "14/03/2000",
      portfolio: "url-to-portfolio-file",
      institution: "Mae Fah Luang University",
      faculty: "School of Information Technology",
      field_of_study: "Program in Software Engineering",
      graduation_year: 2022,
      gpa: 3.84,
    },
    {
      name: "Mr. Pitak Cheiywchay",
      education_level: "Education: -",
      age: 20,
      experience: "-",
      position: "System Analyst",
      category: "Employees",
      contact: "0941234567",
      email: "pitak@gmail.com",
      dob: "01/01/2003",
      portfolio: "url-to-portfolio-file",
      institution: "-",
      faculty: "-",
      field_of_study: "-",
      graduation_year: "-",
      gpa: "-",
    },
    {
      name: "Ms. Somying Makmee",
      education_level: "Bachelor's degrees",
      age: 27,
      experience: "2 years",
      position: "Mobile Developer",
      category: "Internships",
      closed: true,
      contact: "0949876543",
      email: "somying@gmail.com",
      dob: "15/05/1996",
      portfolio: "url-to-portfolio-file",
      institution: "Chulalongkorn University",
      faculty: "Faculty of Engineering",
      field_of_study: "Computer Engineering",
      graduation_year: 2019,
      gpa: 3.5,
    },
    {
      name: "Mr. Sudjab Themak",
      education_level: "Bachelor's degrees",
      age: 46,
      experience: "12 years",
      position: "Programmer",
      category: "Internships",
      closed: true,
      contact: "0945551234",
      email: "sudjab@gmail.com",
      dob: "22/11/1977",
      portfolio: "url-to-portfolio-file",
      institution: "Thammasat University",
      faculty: "Faculty of Science",
      field_of_study: "Computer Science",
      graduation_year: 2000,
      gpa: 3.2,
    },
  ];

  // เลือกผู้สมัครตาม applicantId
  const currentApplicant = jobData[parseInt(applicantId)];

  // หากไม่มีข้อมูลผู้สมัคร
  if (!currentApplicant) {
    return <div>Applicant not found</div>;
  }

  return (
    <div className="morejobs-container">
      {/* Sidebar */}
      <aside className="morejobs-sidebar">
        <div className="morejobs-logo"></div>
        <h2 className="morejobs-sidebar-title">Admin</h2>
        <ul className="morejobs-sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="morejobs-sidebar-link">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="morejobs-sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="morejobs-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="morejobs-sidebar-link active">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/examinationresults" className="morejobs-sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="morejobs-sidebar-link">
              Check List
            </Link>
          </li>
        </ul>
        <div className="morejobs-logout-container">
          <button
            className="morejobs-logout-button"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="morejobs-main-content">
        <header className="morejobs-header">
          <h1 className="morejobs-header-title">Applicant Information</h1>
        </header>

        <div className="morejobs-applicant-info">
          {/* Applicant Header */}
          <div className="morejobs-applicant-header">
           
            <div>
              <h3>{currentApplicant.name}</h3>
              <p>{currentApplicant.age} years old</p>
            </div>
          </div>

          {/* Applicant Details */}
          <div className="morejobs-applicant-details">
            <div className="morejobs-applicant-section">
              <h4>Personal Information</h4>
              <p>Contact number: {currentApplicant.contact}</p>
              <p>Email: {currentApplicant.email}</p>
              <p>Date of birth: {currentApplicant.dob}</p>
            </div>
            <div className="morejobs-applicant-section">
              <h4>Portfolio</h4>
              <button
                className="morejobs-portfolio-button"
                onClick={() => window.open(currentApplicant.portfolio, "_blank")}
              >
                View file
              </button>
            </div>
            <div className="morejobs-applicant-section">
              <h4>Study</h4>
              <p>Educational level: {currentApplicant.education_level}</p>
              <p>Educational institution: {currentApplicant.institution}</p>
              <p>Faculty: {currentApplicant.faculty}</p>
            </div>
            <div className="morejobs-applicant-section">
              <h4></h4>
              <p>Field of study: {currentApplicant.field_of_study}</p>
              <p>Graduation year: {currentApplicant.graduation_year}</p>
              <p>GPA: {currentApplicant.gpa}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreJobs;