import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./morepersonnal.css";

function Morepersonnal() {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <div className="morepersonnal-container">
      <aside className="morepersonnal-sidebar">
        <div className="morepersonnal-logo"></div>
        <h2 className="morepersonnal-sidebar-title">Admin</h2>
        <ul className="morepersonnal-sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="morepersonnal-sidebar-link active">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="morepersonnal-sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="morepersonnal-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="morepersonnal-sidebar-link">Jobs</Link>
          </li>
          <li>
            <Link to="/examinationresults" className="morepersonnal-sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="morepersonnal-sidebar-link">Check List</Link>
          </li>
        </ul>
        <div className="morepersonnal-logout-container">
          <button className="morepersonnal-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="morepersonnal-main-content">
        <header className="morepersonnal-header">
          <h1 className="morepersonnal-header-title">Personnal Information</h1>
        </header>
        <div className="morepersonnal-personal-info-card">
          <div className="morepersonnal-info-section">
            <h3>Personel Information</h3>
            <div className="morepersonnal-info-grid">
              <p className="morepersonnal-info-item">
                <strong>Name:</strong> <span>{personalInfo.name}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>National ID:</strong> <span>{personalInfo.nationalId}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Address:</strong> <span>{personalInfo.address}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Email Address:</strong> <span>{personalInfo.email}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Phone Number:</strong> <span>{personalInfo.phone}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Date of Birth:</strong> <span>{personalInfo.dateOfBirth}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Position:</strong> <span>{personalInfo.position}</span>
              </p>
            </div>
          </div>

          <div className="morepersonnal-info-section">
            <h3>Employment Information</h3>
            <div className="morepersonnal-info-grid">
              <p className="morepersonnal-info-item">
                <strong>Date of Employment:</strong> <span>{personalInfo.dateOfEmployment}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Employment Status:</strong> <span>{personalInfo.employmentStatus}</span>
              </p>
            </div>
          </div>

          <div className="morepersonnal-info-section">
            <h3>Education Status</h3>
            <div className="morepersonnal-info-grid">
              <p className="morepersonnal-info-item">
                <strong>Education Level:</strong> <span>{personalInfo.educationLevel}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Institution:</strong> <span>{personalInfo.institution}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Graduation Year:</strong> <span>{personalInfo.graduationYear}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>Field of Study:</strong> <span>{personalInfo.fieldOfStudy}</span>
              </p>
              <p className="morepersonnal-info-item">
                <strong>GPA:</strong> <span>{personalInfo.gpa}</span>
              </p>
            </div>
          </div>

          <div className="morepersonnal-button-container">
            <button className="morepersonnal-officer-button">Officer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morepersonnal;