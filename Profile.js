import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Use profileData and photo from state if available (e.g., after saving in EditProfile), otherwise use default
  const defaultProfileData = {
    firstName: "Grok",
    lastName: "Lastname",
    employeeCode: "1234567890",
    idCard: "1234567890123",
    phoneNumber: "1234567890",
    birthday: "17/10/2000",
    nationality: "Thai",
    ethnicity: "Thai",
    religion: "Buddhism",
    bloodType: "O",
    email: "summit@gmail.com",
    houseNumber: "123",
    moo: "5",
    soi: "",
    road: "Ratchadaphisek",
    subDistrict: "Khlong Toei",
    district: "Khlong Toei",
    province: "Bangkok",
    postalCode: "10110",
    gradForm: "Bachelor's Degree",
    gradYear: "2022",
    highSchool: "ABC School",
    gpa: "3.8",
    educationLevel: "Bachelor's Degree",
    degree: "Bachelor of Engineering",
    faculty: "Engineering",
    major: "Software Engineering",
    university: "Applied Digital Technology",
  };

  const profileData = location.state?.profileData || defaultProfileData;
  const photo = location.state?.photo || null; // Get the photo from state

  const handleLogout = () => {
    navigate("/");
  };

  const handleEditProfile = () => {
    // Navigate to the EditProfile page and pass the profileData and photo as state
    navigate("/editprofile", { state: { profileData, photo } });
  };

  return (
    <div className="Profile-container">
      <aside className="Profile-sidebar">
        <div className="Profile-logo"></div>
        <h2 className="Profile-sidebar-title">User</h2>
        <ul className="Profile-sidebar-menu">
          <h4 className="Profile-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/recruitingemployees" className="Profile-sidebar-link">
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link to="/recruitinginternships" className="Profile-sidebar-link">
              Recruiting internships
            </Link>
          </li>
          <h4 className="Profile-sidebar-subheader">Status</h4>
          <li>
            <Link to="/applicantstatus" className="Profile-sidebar-link">
              Applicant status
            </Link>
          </li>
          <h4 className="Profile-sidebar-subheader">Information</h4>
          <li>
            <Link to="/profile" className="Profile-sidebar-link active">
              Profile
            </Link>
          </li>
        </ul>
        <div className="Profile-logout-container">
          <button className="Profile-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="Profile-main-content">
        <header className="Profile-header">
          <h1 className="Profile-header-title">Personal Information</h1>
          <button className="Profile-edit-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </header>

        <div className="Profile-content-container">
          {/* User Header */}
          <div className="Profile-user-header">
            <div
              className="Profile-user-avatar"
              style={{
                backgroundImage: photo ? `url(${photo})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="Profile-user-info">
              <h2 className="Profile-user-name">{`${profileData.firstName} ${profileData.lastName}`}</h2>
              <p className="Profile-user-position">{profileData.jobPosition}</p>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="Profile-section">
            <h2 className="Profile-section-title">Personal Information</h2>
            <div className="Profile-info-table">
              <div className="Profile-info-row">
                <span className="Profile-label">Name</span>
                <span className="Profile-value">{profileData.firstName}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Last Name</span>
                <span className="Profile-value">{profileData.lastName}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Employee Code</span>
                <span className="Profile-value">{profileData.employeeCode}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">ID Card</span>
                <span className="Profile-value">{profileData.idCard}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Phone Number</span>
                <span className="Profile-value">{profileData.phoneNumber}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Birthday</span>
                <span className="Profile-value">{profileData.birthday}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Nationality</span>
                <span className="Profile-value">{profileData.nationality}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Ethnicity</span>
                <span className="Profile-value">{profileData.ethnicity}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Religion</span>
                <span className="Profile-value">{profileData.religion}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Blood Type</span>
                <span className="Profile-value">{profileData.bloodType}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Email</span>
                <span className="Profile-value">{profileData.email}</span>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="Profile-section">
            <h2 className="Profile-section-title">Address</h2>
            <div className="Profile-info-table">
              <div className="Profile-info-row">
                <span className="Profile-label">House Number</span>
                <span className="Profile-value">{profileData.houseNumber}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Moo</span>
                <span className="Profile-value">{profileData.moo}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Soi</span>
                <span className="Profile-value">{profileData.soi || "-"}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Road</span>
                <span className="Profile-value">{profileData.road}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Sub-district</span>
                <span className="Profile-value">{profileData.subDistrict}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">District</span>
                <span className="Profile-value">{profileData.district}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Province</span>
                <span className="Profile-value">{profileData.province}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Postal Code</span>
                <span className="Profile-value">{profileData.postalCode}</span>
              </div>
            </div>
          </div>

          {/* Educational History Section */}
          <div className="Profile-section">
            <h2 className="Profile-section-title">Educational History</h2>
            <div className="Profile-info-table">
              <div className="Profile-info-row">
                <span className="Profile-label">Graduate Form</span>
                <span className="Profile-value">{profileData.gradForm}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Year of Graduation</span>
                <span className="Profile-value">{profileData.gradYear}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">High School</span>
                <span className="Profile-value">{profileData.highSchool}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">GPA</span>
                <span className="Profile-value">{profileData.gpa}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Education Level</span>
                <span className="Profile-value">{profileData.educationLevel}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Degree</span>
                <span className="Profile-value">{profileData.degree}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Faculty</span>
                <span className="Profile-value">{profileData.faculty}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">Major</span>
                <span className="Profile-value">{profileData.major}</span>
              </div>
              <div className="Profile-info-row">
                <span className="Profile-label">University</span>
                <span className="Profile-value">{profileData.university}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;