import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./morepersonnal.css";

function Morepersonnal() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the person data from the location state, or use default data if none is provided
  const personalInfo = location.state?.person || {
    name: "Mr. Glomkiao Lammakmai",
    nationalId: "1578805564589",
    address: "333 Tha Sut, Mueang Chiang Rai District, Chiang Rai 57000",
    email: "glomkiao.lammakmai@gmail.com",
    phone: "087-531-4597",
    dateOfBirth: "22/11/1985",
    position: "Programmer",
    employmentStatus: "Full-time",
    dateOfEmployment: "13/3/2563",
    educationLevel: "Bachelor's degree",
    institution: "Mae Fah Luang University",
    fieldOfStudy: "Software Engineering",
    gpa: "4.00",
    graduationYear: "2554",
  };

  const handleLogout = () => {
    navigate("/home");
  };

  const handleEdit = () => {
    // Navigate to EditJobs with the personal info and use nationalId as personId
    navigate(`/editjobs/${personalInfo.nationalId}`, { state: { person: personalInfo } });
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="sidebar-link">
              Personal Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="sidebar-link">Jobs</Link>
          </li>
          <li>
            <Link to="/examinationresults" className="sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="sidebar-link">Check List</Link>
          </li>
        </ul>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">Personnel Information</h1>
        </header>
        <div className="personal-info-card">
          <div className="header-container">
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          </div>

          {/* Personal Information Section */}
          <div className="info-section">
            <h3>Personal Information</h3>
            <div className="info-grid">
              <p className="info-item">
                <strong>Name:</strong> <span>{personalInfo.name}</span>
              </p>
              <p className="info-item">
                <strong>National ID:</strong> <span>{personalInfo.nationalId}</span>
              </p>
              <p className="info-item">
                <strong>Address:</strong> <span>{personalInfo.address}</span>
              </p>
              <p className="info-item">
                <strong>Email Address:</strong> <span>{personalInfo.email}</span>
              </p>
              <p className="info-item">
                <strong>Phone Number:</strong> <span>{personalInfo.phone}</span>
              </p>
              <p className="info-item">
                <strong>Date of Birth:</strong> <span>{personalInfo.dateOfBirth}</span>
              </p>
              <p className="info-item">
                <strong>Position:</strong> <span>{personalInfo.position}</span>
              </p>
            </div>
          </div>

          {/* Employment Information Section */}
          <div className="info-section">
            <h3>Employment Information</h3>
            <div className="info-grid">
              <p className="info-item">
                <strong>Date of Employment:</strong> <span>{personalInfo.dateOfEmployment}</span>
              </p>
              <p className="info-item">
                <strong>Employment Status:</strong> <span>{personalInfo.employmentStatus}</span>
              </p>
            </div>
          </div>

          {/* Education Information Section */}
          <div className="info-section">
            <h3>Education Status</h3>
            <div className="info-grid">
              <p className="info-item">
                <strong>Education Level:</strong> <span>{personalInfo.educationLevel}</span>
              </p>
              <p className="info-item">
                <strong>Institution:</strong> <span>{personalInfo.institution}</span>
              </p>
              <p className="info-item">
                <strong>Graduation Year:</strong> <span>{personalInfo.graduationYear}</span>
              </p>
              <p className="info-item">
                <strong>Field of Study:</strong> <span>{personalInfo.fieldOfStudy}</span>
              </p>
              <p className="info-item">
                <strong>GPA:</strong> <span>{personalInfo.gpa}</span>
              </p>
            </div>
          </div>

          {/* Officer Button */}
          <div className="button-container">
            <button className="officer-button">Officer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morepersonnal;