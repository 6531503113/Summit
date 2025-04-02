// EmployeePersonnelInformation.jsx
import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./EmployeePersonnelInformation.css";

function EmployeePersonnelInformation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Use profileData and photo from state if available, otherwise use default
  const defaultProfileData = {
    firstName: "Grok",
    lastName: "Lastname",
    employeeCode: "1234567890",
    idCard: "1234567890123",
    phoneNumber: "123-456-7890",
    birthday: "17/10/2000",
    nationality: "Thai",
    ethnicity: "Thai",
    religion: "Buddhism",
    bloodType: "O",
    email: "summit@gmail.com",
    jobPosition: "Developer",
    workStartDate: "1/01/2023",
    houseNumber: "123",
    moo: "5",
    soi: "",
    road: "Ratchadaphisek",
    subDistrict: "Khlong Khuean",
    district: "Khlong Khuean",
    province: "Prachinburi",
    postalCode: "10110",
    gradForm: "High School",
    gradYear: "31/03/2018",
    highSchool: "ABC School",
    gpa: "2.6",
    educationLevel: "Bachelor's Degree",
    degree: "Bachelor of Engineering in Software Engineering",
    faculty: "Applied Digital Technology",
    major: "Software Engineering",
  };

  const profileData = location.state?.profileData || defaultProfileData;
  const photo = location.state?.photo || null;

  const handleLogout = () => {
    navigate("/");
  };

  const handleEditProfile = () => {
    navigate("/editprofile", { state: { profileData, photo } });
  };

  return (
    <div className="EmployeePersonnelInformation-container">
      <aside className="EmployeePersonnelInformation-sidebar">
        <div className="EmployeePersonnelInformation-logo"></div>
        <h2 className="EmployeePersonnelInformation-sidebar-title">Employee</h2>
        <ul className="EmployeePersonnelInformation-sidebar-menu">
          <h4 className="EmployeePersonnelInformation-sidebar-subheader">Information</h4>
          <li>
          <Link to="/employee-personnel-information" className="EmployeePersonnelInformation-sidebar-link active">
  Personal Information
</Link>
          </li>
        </ul>
        <div className="EmployeePersonnelInformation-logout-container">
          <button className="EmployeePersonnelInformation-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="EmployeePersonnelInformation-main-content">
        <header className="EmployeePersonnelInformation-header">
          <h1 className="EmployeePersonnelInformation-header-title">Personal Information</h1>
          <button className="EmployeePersonnelInformation-edit-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </header>

        <div className="EmployeePersonnelInformation-content-container">
          {/* User Header */}
          <div className="EmployeePersonnelInformation-user-header">
                <div className="EmployeePersonnelInformation-avatar-container">
                    <div
                    className="EmployeePersonnelInformation-user-avatar"
                    style={{
                        backgroundImage: photo ? `url(${photo})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    ></div>
                </div>
            </div>

          {/* Personal Information Section */}
          <div className="EmployeePersonnelInformation-section">
            <h2 className="EmployeePersonnelInformation-section-title">Personal Information</h2>
            <div className="EmployeePersonnelInformation-info-grid">
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Name - Last Name</span>
                <span className="EmployeePersonnelInformation-value">{`${profileData.firstName} ${profileData.lastName}`}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Employee Code</span>
                <span className="EmployeePersonnelInformation-value">{profileData.employeeCode}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">ID Card</span>
                <span className="EmployeePersonnelInformation-value">{profileData.idCard}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Phone Number</span>
                <span className="EmployeePersonnelInformation-value">{profileData.phoneNumber}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Birthday</span>
                <span className="EmployeePersonnelInformation-value">{profileData.birthday}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Nationality</span>
                <span className="EmployeePersonnelInformation-value">{profileData.nationality}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Ethnicity</span>
                <span className="EmployeePersonnelInformation-value">{profileData.ethnicity}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Religion</span>
                <span className="EmployeePersonnelInformation-value">{profileData.religion}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Blood Type</span>
                <span className="EmployeePersonnelInformation-value">{profileData.bloodType}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Email</span>
                <span className="EmployeePersonnelInformation-value">{profileData.email}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Job Position</span>
                <span className="EmployeePersonnelInformation-value">{profileData.jobPosition}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Work Start Date</span>
                <span className="EmployeePersonnelInformation-value">{profileData.workStartDate}</span>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="EmployeePersonnelInformation-section">
            <h2 className="EmployeePersonnelInformation-section-title">Address</h2>
            <div className="EmployeePersonnelInformation-info-grid">
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">House Number</span>
                <span className="EmployeePersonnelInformation-value">{profileData.houseNumber}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Moo</span>
                <span className="EmployeePersonnelInformation-value">{profileData.moo}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Soi</span>
                <span className="EmployeePersonnelInformation-value">{profileData.soi || "-"}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Road</span>
                <span className="EmployeePersonnelInformation-value">{profileData.road}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Sub-district</span>
                <span className="EmployeePersonnelInformation-value">{profileData.subDistrict}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">District</span>
                <span className="EmployeePersonnelInformation-value">{profileData.district}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Province</span>
                <span className="EmployeePersonnelInformation-value">{profileData.province}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Postal Code</span>
                <span className="EmployeePersonnelInformation-value">{profileData.postalCode}</span>
              </div>
            </div>
          </div>

          {/* Educational History Section */}
          <div className="EmployeePersonnelInformation-section">
            <h2 className="EmployeePersonnelInformation-section-title">Educational History</h2>
            <div className="EmployeePersonnelInformation-info-grid">
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Graduated Form</span>
                <span className="EmployeePersonnelInformation-value">{profileData.gradForm}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Date of Graduation</span>
                <span className="EmployeePersonnelInformation-value">{profileData.gradYear}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">High School</span>
                <span className="EmployeePersonnelInformation-value">{profileData.highSchool}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">GPAX</span>
                <span className="EmployeePersonnelInformation-value">{profileData.gpa}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Education Level</span>
                <span className="EmployeePersonnelInformation-value">{profileData.educationLevel}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Degree</span>
                <span className="EmployeePersonnelInformation-value">{profileData.degree}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Faculty</span>
                <span className="EmployeePersonnelInformation-value">{profileData.faculty}</span>
              </div>
              <div className="EmployeePersonnelInformation-info-item">
                <span className="EmployeePersonnelInformation-label">Major</span>
                <span className="EmployeePersonnelInformation-value">{profileData.major}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeePersonnelInformation;