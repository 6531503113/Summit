import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./morepersonnal.css";

function Morepersonnal() {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    name: "Mr. Glomkiao Lammakmai",
    nationalId: "1578805564589",
    address: "333 Tha Sut, Mueang Chiang Rai District, Chiang Rai 57000",
    email: "glomkiao.lammakmai@gmail.com",
    phone: "087-531-4597",
    dateOfBirth: "22/11/1985",
    position: "Programmer",
    employmentStatus: "Full-time",
    dateOfEmployment: "13/3/2563",
    educationLevel: "Bachelor's degrees",
    institution: "Mae Fah Luang University",
    fieldOfStudy: "Software Engineering",
    gpa: "4.00",
    graduationYear: "2554",
  });

  const handleLogout = () => {
    navigate("/home");
  };

  const handleEdit = () => {
    console.log("Editing personal information:", personalInfo);
    // Add your edit logic here (e.g., open a modal or navigate to an edit page)
    alert("Edit functionality not implemented in this example.");
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link active">Personal Information</Link></li>
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
         
         
      {/* Main Content */}
      <div className="main-content">
      <header className="header">
          <h1 className="header-title">Personnel Information</h1>
        </header>
        <div className="personal-info-card">
          <div className="header-container">
            
            <button className="edit-button" onClick={handleEdit}>Edit</button>
          </div>

          {/* Personal Information Section */}
          <div className="info-section">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> {personalInfo.name}</p>
            <p><strong>National ID:</strong> {personalInfo.nationalId}</p>
            <p><strong>Address:</strong> {personalInfo.address}</p>
            <p><strong>Email Address:</strong> {personalInfo.email}</p>
            <p><strong>Phone Number:</strong> {personalInfo.phone}</p>
            <p><strong>Date of birth:</strong> {personalInfo.dateOfBirth}</p>
            <p><strong>Position:</strong> {personalInfo.position}</p>
          </div>

          {/* Employment Information Section */}
          <div className="info-section">
            <h3>Employment Information</h3>
            <p><strong>Date of Employment:</strong> {personalInfo.dateOfEmployment}</p>
            <p><strong>Employment Status:</strong> {personalInfo.employmentStatus}</p>
          </div>

          {/* Education Information Section */}
          <div className="info-section">
            <h3>Education Status</h3>
            <p><strong>Education Level:</strong> {personalInfo.educationLevel}</p>
            <p><strong>Institution:</strong> {personalInfo.institution}</p>
            <p><strong>Graduation Year:</strong> {personalInfo.graduationYear}</p>
            <p><strong>Field of Study:</strong> {personalInfo.fieldOfStudy}</p>
            <p><strong>GPA:</strong> {personalInfo.gpa}</p>
          </div>
        </div>
        <button className="officer-button">Officer</button>
      </div>
    </div>
  );
}

export default Morepersonnal;