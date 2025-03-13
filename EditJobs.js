import React, { useState } from "react";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import "./EditAnnouncement.css"; // หรือเปลี่ยนชื่อ CSS เป็น EditJobs.css ถ้าต้องการ

function EditJobs() {
  const navigate = useNavigate();
  const location = useLocation();
  const { personId } = useParams();

  const { person = {} } = location.state || {};
  const initialFormData = {
    name: person.name || "",
    nationalId: person.nationalId || "",
    phoneNumber: person.phone || "",
    email: person.email || "",
    dateOfBirth: person.dateOfBirth || "",
    address: person.address || "",
    position: person.position || "",
    dateOfEmployment: person.dateOfEmployment || "",
    employmentStatus: person.employmentStatus || "",
    educationLevel: person.educationLevel || "",
    fieldOfStudy: person.fieldOfStudy || "",
    institution: person.institution || "",
    graduationYear: person.graduationYear || "",
    gpa: person.gpa || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleLogout = () => {
    navigate("/home");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    switch (name) {
      case "name":
      case "fieldOfStudy":
      case "institution":
        processedValue = value.replace(/[^a-zA-Z\s'-]/g, "");
        break;
      case "nationalId":
      case "phoneNumber":
      case "graduationYear":
        processedValue = value.replace(/[^0-9]/g, "").replace(/^-/, "");
        if (name === "graduationYear" && processedValue.length === 4 && parseInt(processedValue) < 1900) {
          processedValue = "1900";
        }
        if (name === "phoneNumber" && processedValue.length > 10) {
          processedValue = processedValue.slice(0, 10);
        }
        break;
      case "gpa":
        processedValue = value.replace(/[^0-9.]/g, "").replace(/^-/, "");
        if (processedValue.split(".").length > 2) {
          processedValue = processedValue.split(".")[0] + "." + processedValue.split(".")[1].slice(0, 2);
        }
        const numericValue = parseFloat(processedValue);
        if (!isNaN(numericValue) && numericValue > 4.0) {
          processedValue = "4.0";
        }
        break;
      case "email":
      case "address":
      case "dateOfBirth":
      case "dateOfEmployment":
      case "position":
      case "employmentStatus":
      case "educationLevel":
        processedValue = value;
        break;
      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
  };

  const handleSave = () => {
    console.log("Edited personnel data saved:", formData);
    alert("Personnel information updated successfully!");
    navigate("/morepersonnal", { state: { person: formData } });
  };

  return (
    <div className="editjobs recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link">Personnel Information</Link></li>
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
          <h1 className="header-title">Personnel Information</h1>
        </header>
        <div className="form-container">
          <h1 className="form-title">Edit Personnel Information</h1>

          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                pattern="[A-Za-z\s'-]+"
                title="Please enter only letters, spaces, hyphens, or apostrophes"
              />
              <input
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleInputChange}
                placeholder="National ID"
                pattern="[0-9]+"
                title="Please enter only numbers"
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                pattern="[0-9]{1,10}"
                title="Please enter up to 10 digits (numbers only)"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
              />
            </div>
            <div className="form-row">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="Date of Birth"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Position"
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Employment Information</h2>
            <div className="form-row">
              <input
                type="date"
                name="dateOfEmployment"
                value={formData.dateOfEmployment}
                onChange={handleInputChange}
                placeholder="Date of Employment"
              />
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
              >
                <option value="">Select Status</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Education</h2>
            <div className="form-row">
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
              >
                <option value="">Select Level</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
              </select>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleInputChange}
                placeholder="Field of Study"
                pattern="[A-Za-z\s'-]+"
                title="Please enter only letters, spaces, hyphens, or apostrophes"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleInputChange}
                placeholder="Institution"
                pattern="[A-Za-z\s'-]+"
                title="Please enter only letters, spaces, hyphens, or apostrophes"
              />
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                placeholder="Graduation Year"
                pattern="[0-9]{4}"
                title="Please enter a 4-digit year (numbers only)"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="gpa"
                value={formData.gpa}
                onChange={handleInputChange}
                placeholder="GPA"
                pattern="^[0-4](?:\.\d{0,2})?$"
                title="Please enter a number between 0.00 and 4.00 (e.g., 3.50)"
              />
            </div>
          </div>

          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditJobs;