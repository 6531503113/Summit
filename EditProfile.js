import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get profileData and photo from the state passed via navigation, or use default if none is provided
  const initialProfileData = location.state?.profileData || {
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

  const [profileData, setProfileData] = useState(initialProfileData);
  const [photo, setPhoto] = useState(location.state?.photo || null); // Store the photo URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file); // Create a local URL for the image preview
      setPhoto(photoURL);
    }
  };

  const handleSave = () => {
    // Basic validation
    if (!profileData.firstName || !profileData.lastName || !profileData.email) {
      alert("Please fill in all required fields (Name, Last Name, Email).");
      return;
    }

    // Placeholder for saving to an API (optional)
    alert("Profile saved successfully!");

    // Navigate back to the profile page and pass the updated profileData and photo
    navigate("/profile", { state: { profileData, photo } });
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="EditProfile-container">
      <aside className="EditProfile-sidebar">
        <div className="EditProfile-logo"></div>
        <h2 className="EditProfile-sidebar-title">User</h2>
        <ul className="EditProfile-sidebar-menu">
          <h4 className="EditProfile-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/recruitingemployees" className="EditProfile-sidebar-link">
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link to="/recruitinginternships" className="EditProfile-sidebar-link">
              Recruiting internships
            </Link>
          </li>
          <h4 className="EditProfile-sidebar-subheader">Status</h4>
          <li>
            <Link to="/applicantstatus" className="EditProfile-sidebar-link">
              Applicant status
            </Link>
          </li>
          <h4 className="EditProfile-sidebar-subheader">Information</h4>
          <li>
            <Link to="/profile" className="EditProfile-sidebar-link active">
              Profile
            </Link>
          </li>
        </ul>
        <div className="EditProfile-logout-container">
          <button className="EditProfile-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="EditProfile-main-content">
        <header className="EditProfile-header">
          <h1 className="EditProfile-header-title">Edit Profile</h1>
        </header>

        <div className="EditProfile-content-container">
          {/* User Header with Add Photo */}
          <div className="EditProfile-user-header">
            <div
              className="EditProfile-user-avatar"
              style={{
                backgroundImage: photo ? `url(${photo})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleAddPhoto}
                className="EditProfile-add-photo-input"
                style={{ display: "none" }}
                id="add-photo-input"
              />
              <label htmlFor="add-photo-input" className="EditProfile-add-photo-button">
                {photo ? "Change Photo" : "+ Add Photo"}
              </label>
            </div>
            <div className="EditProfile-user-info">
              <h2 className="EditProfile-user-name">{`${profileData.firstName} ${profileData.lastName}`}</h2>
              <p className="EditProfile-user-position">{profileData.jobPosition}</p>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="EditProfile-section">
            <h2 className="EditProfile-section-title">Personal Information</h2>
            <div className="EditProfile-form-grid">
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Employee Code</label>
                <input
                  type="text"
                  name="employeeCode"
                  value={profileData.employeeCode}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">ID Card</label>
                <input
                  type="text"
                  name="idCard"
                  value={profileData.idCard}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Birthday</label>
                <input
                  type="text"
                  name="birthday"
                  value={profileData.birthday}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={profileData.nationality}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Ethnicity</label>
                <input
                  type="text"
                  name="ethnicity"
                  value={profileData.ethnicity}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Religion</label>
                <input
                  type="text"
                  name="religion"
                  value={profileData.religion}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Blood Type</label>
                <input
                  type="text"
                  name="bloodType"
                  value={profileData.bloodType}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="EditProfile-section">
            <h2 className="EditProfile-section-title">Address</h2>
            <div className="EditProfile-form-grid">
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">House Number</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={profileData.houseNumber}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Moo</label>
                <input
                  type="text"
                  name="moo"
                  value={profileData.moo}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Soi</label>
                <input
                  type="text"
                  name="soi"
                  value={profileData.soi}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Road</label>
                <input
                  type="text"
                  name="road"
                  value={profileData.road}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Sub-district</label>
                <input
                  type="text"
                  name="subDistrict"
                  value={profileData.subDistrict}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">District</label>
                <input
                  type="text"
                  name="district"
                  value={profileData.district}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Province</label>
                <input
                  type="text"
                  name="province"
                  value={profileData.province}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={profileData.postalCode}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
            </div>
          </div>

          {/* Educational History Section */}
          <div className="EditProfile-section">
            <h2 className="EditProfile-section-title">Educational History</h2>
            <div className="EditProfile-form-grid">
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Graduate Form</label>
                <input
                  type="text"
                  name="gradForm"
                  value={profileData.gradForm}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Year of Graduation</label>
                <input
                  type="text"
                  name="gradYear"
                  value={profileData.gradYear}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">High School</label>
                <input
                  type="text"
                  name="highSchool"
                  value={profileData.highSchool}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">GPA</label>
                <input
                  type="text"
                  name="gpa"
                  value={profileData.gpa}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Education Level</label>
                <input
                  type="text"
                  name="educationLevel"
                  value={profileData.educationLevel}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={profileData.degree}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Faculty</label>
                <input
                  type="text"
                  name="faculty"
                  value={profileData.faculty}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">Major</label>
                <input
                  type="text"
                  name="major"
                  value={profileData.major}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
              <div className="EditProfile-form-item">
                <label className="EditProfile-label">University</label>
                <input
                  type="text"
                  name="university"
                  value={profileData.university}
                  onChange={handleChange}
                  className="EditProfile-input"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="EditProfile-save-container">
            <button className="EditProfile-save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;