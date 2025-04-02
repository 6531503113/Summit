import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Add Link import
import "./EditEmployeePersonnelInformation.css";

function EditEmployeePersonnelInformation() {
  const navigate = useNavigate();
  const location = useLocation();

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
  const initialPhoto = location.state?.photo || null;

  const [formData, setFormData] = useState(profileData);
  const [photo, setPhoto] = useState(initialPhoto);

  const handleLogout = () => {
    navigate("/"); // Consider navigating to a login page if that's the intended behavior
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    navigate("/employee-personnel-information", { state: { profileData: formData, photo } });
  };

  const handleCancel = () => {
    navigate("/employee-personnel-information", { state: { profileData, photo } });
  };

  return (
    <div className="EditEmployeePersonnelInformation-container">
      <aside className="EditEmployeePersonnelInformation-sidebar">
        <div className="EditEmployeePersonnelInformation-logo"></div>
        <h2 className="EditEmployeePersonnelInformation-sidebar-title">Employee</h2>
        <ul className="EditEmployeePersonnelInformation-sidebar-menu">
          <h4 className="EditEmployeePersonnelInformation-sidebar-subheader">Information</h4>
          <li>
            <Link to="/employee-personnel-information" className="EditEmployeePersonnelInformation-sidebar-link active">
              Personal Information
            </Link>
          </li>
        </ul>
        <div className="EditEmployeePersonnelInformation-logout-container">
          <button className="EditEmployeePersonnelInformation-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="EditEmployeePersonnelInformation-main-content">
        <header className="EditEmployeePersonnelInformation-header">
          <h1 className="EditEmployeePersonnelInformation-header-title">Personal Information</h1>
          <button className="EditEmployeePersonnelInformation-edit-button" onClick={handleCancel}>
            Cancel
          </button>
        </header>

        <div className="EditEmployeePersonnelInformation-content-container">
          {/* User Header */}
          <div className="EditEmployeePersonnelInformation-user-header">
            <div className="EditEmployeePersonnelInformation-avatar-container">
              <div
                className="EditEmployeePersonnelInformation-user-avatar"
                style={{
                  backgroundImage: photo ? `url(${photo})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <label className="EditEmployeePersonnelInformation-photo-upload-label">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="EditEmployeePersonnelInformation-photo-upload-input"
                />
                Add Photo
              </label>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="EditEmployeePersonnelInformation-section">
            <h2 className="EditEmployeePersonnelInformation-section-title">Personal Information</h2>
            <div className="EditEmployeePersonnelInformation-info-grid">
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Name - Last Name</span>
                <input
                  type="text"
                  name="firstName"
                  value={`${formData.firstName} ${formData.lastName}`}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Employee Code</span>
                <input
                  type="text"
                  name="employeeCode"
                  value={formData.employeeCode}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">ID Card</span>
                <input
                  type="text"
                  name="idCard"
                  value={formData.idCard}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Phone Number</span>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Birthday</span>
                <input
                  type="text"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Nationality</span>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Ethnicity</span>
                <input
                  type="text"
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Religion</span>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Blood Type</span>
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Job Position</span>
                <input
                  type="text"
                  name="jobPosition"
                  value={formData.jobPosition}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Work Start Date</span>
                <input
                  type="text"
                  name="workStartDate"
                  value={formData.workStartDate}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="EditEmployeePersonnelInformation-section">
            <h2 className="EditEmployeePersonnelInformation-section-title">Address</h2>
            <div className="EditEmployeePersonnelInformation-info-grid">
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">House Number</span>
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Moo</span>
                <input
                  type="text"
                  name="moo"
                  value={formData.moo}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Soi</span>
                <input
                  type="text"
                  name="soi"
                  value={formData.soi}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Road</span>
                <input
                  type="text"
                  name="road"
                  value={formData.road}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Sub-district</span>
                <input
                  type="text"
                  name="subDistrict"
                  value={formData.subDistrict}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">District</span>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Province</span>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Postal Code</span>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
            </div>
          </div>

          {/* Educational History Section */}
          <div className="EditEmployeePersonnelInformation-section">
            <h2 className="EditEmployeePersonnelInformation-section-title">Educational History</h2>
            <div className="EditEmployeePersonnelInformation-info-grid">
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Graduated Form</span>
                <input
                  type="text"
                  name="gradForm"
                  value={formData.gradForm}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Date of Graduation</span>
                <input
                  type="text"
                  name="gradYear"
                  value={formData.gradYear}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">High School</span>
                <input
                  type="text"
                  name="highSchool"
                  value={formData.highSchool}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">GPAX</span>
                <input
                  type="text"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Education Level</span>
                <input
                  type="text"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Degree</span>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Faculty</span>
                <input
                  type="text"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
              <div className="EditEmployeePersonnelInformation-info-item">
                <span className="EditEmployeePersonnelInformation-label">Major</span>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  className="EditEmployeePersonnelInformation-input"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="EditEmployeePersonnelInformation-save-container">
            <button className="EditEmployeePersonnelInformation-save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmployeePersonnelInformation;