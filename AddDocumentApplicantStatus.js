import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./AddDocumentApplicantStatus.css";

function AddDocumentApplicantStatus() {
  const navigate = useNavigate();
  const location = useLocation();
  const { applicant } = location.state || {}; // Get the applicant data from state

  const [nationalIdFile, setNationalIdFile] = useState(null);
  const [householdFile, setHouseholdFile] = useState(null);
  const [bankBookFile, setBankBookFile] = useState(null);

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/scoreapplicantstatus", { state: { applicant } }); // Navigate back to ScoreApplicantStatus
  };

  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
    }
  };

  const handleSubmit = () => {
    // Placeholder for submitting the files
    if (nationalIdFile || householdFile || bankBookFile) {
      console.log("Submitting files:", { nationalIdFile, householdFile, bankBookFile });
      // Implement API call to upload files here
      alert("Documents submitted successfully!");
      navigate("/scoreapplicantstatus", { state: { applicant } });
    } else {
      alert("Please select at least one file to submit.");
    }
  };

  return (
    <div className="AddDocumentApplicantStatus-container">
      <aside className="AddDocumentApplicantStatus-sidebar">
        <div className="AddDocumentApplicantStatus-logo"></div>
        <h2 className="AddDocumentApplicantStatus-sidebar-title">User</h2>
        <ul className="AddDocumentApplicantStatus-sidebar-menu">
          <h4 className="AddDocumentApplicantStatus-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/recruitingemployees" className="AddDocumentApplicantStatus-sidebar-link">
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link to="/recruitinginternships" className="AddDocumentApplicantStatus-sidebar-link">
              Recruiting internships
            </Link>
          </li>
          <h4 className="AddDocumentApplicantStatus-sidebar-subheader">Status</h4>
          <li>
            <Link to="/applicantstatus" className="AddDocumentApplicantStatus-sidebar-link active">
              Applicant status
            </Link>
          </li>
          <h4 className="AddDocumentApplicantStatus-sidebar-subheader">Information</h4>
          <li>
            <Link to="/profile" className="AddDocumentApplicantStatus-sidebar-link">
              Profile
            </Link>
          </li>
        </ul>
        <div className="AddDocumentApplicantStatus-logout-container">
          <button className="AddDocumentApplicantStatus-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="AddDocumentApplicantStatus-main-content">
        <header className="AddDocumentApplicantStatus-header">
          <h1 className="AddDocumentApplicantStatus-header-title">Additional documents</h1>
        </header>

        {/* Modal Overlay for Document Upload */}
        <div className="AddDocumentApplicantStatus-modal-overlay">
          <div className="AddDocumentApplicantStatus-modal">
            <button className="AddDocumentApplicantStatus-back-button" onClick={handleBack}>
              ←
            </button>
            <div className="AddDocumentApplicantStatus-document-item">
              <span>Copy of the national ID card</span>
              <label className="AddDocumentApplicantStatus-file-label">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleFileChange(setNationalIdFile)}
                  className="AddDocumentApplicantStatus-file-input"
                />
                <span>{nationalIdFile ? nationalIdFile.name : "Select file"}</span>
              </label>
            </div>
            <div className="AddDocumentApplicantStatus-document-item">
              <span>Copy of the household registration</span>
              <label className="AddDocumentApplicantStatus-file-label">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleFileChange(setHouseholdFile)}
                  className="AddDocumentApplicantStatus-file-input"
                />
                <span>{householdFile ? householdFile.name : "Select file"}</span>
              </label>
            </div>
            <div className="AddDocumentApplicantStatus-document-item">
              <span>Copy of the bank account book</span>
              <label className="AddDocumentApplicantStatus-file-label">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleFileChange(setBankBookFile)}
                  className="AddDocumentApplicantStatus-file-input"
                />
                <span>{bankBookFile ? bankBookFile.name : "Select file"}</span>
              </label>
            </div>
            <button
              className="AddDocumentApplicantStatus-submit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDocumentApplicantStatus;