import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./ApplyRecruitingInternships.css";

function ApplyRecruitingInternships() {
  const navigate = useNavigate();
  const location = useLocation();
  const { job } = location.state || {};

  const [resumeFile, setResumeFile] = useState(null);
  const [portfolioFile, setPortfolioFile] = useState(null);
  const [educationalCertificates, setEducationalCertificates] = useState(null);

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/morerecruitinginternships", { state: { job } });
  };

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
        alert("Please upload a PDF, DOC, or DOCX file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB.");
        return;
      }
      setFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile || !portfolioFile) {
      alert("Please upload both Resume and Portfolio.");
      return;
    }

    const confirmSubmit = window.confirm("Are you sure you want to submit your application?");
    if (confirmSubmit) {
      const formDataToSend = new FormData();
      formDataToSend.append("resume", resumeFile);
      formDataToSend.append("portfolio", portfolioFile);
      formDataToSend.append("educationalCertificates", educationalCertificates);
      formDataToSend.append("jobId", job?.id);

      try {
        const response = await fetch("YOUR_API_ENDPOINT/apply", {
          method: "POST",
          body: formDataToSend,
        });
        if (response.ok) {
          alert("Application submitted successfully!");
          navigate("/applicantstatus");
        } else {
          alert("Failed to submit application. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting application:", error);
        alert("An error occurred while submitting your application.");
      }
    }
  };

  return (
    <div className="ApplyRecruitingInternships-container">
      <aside className="ApplyRecruitingInternships-sidebar">
        <div className="ApplyRecruitingInternships-logo"></div>
        <h2 className="ApplyRecruitingInternships-sidebar-title">User</h2>
        <ul className="ApplyRecruitingInternships-sidebar-menu">
          <h4 className="ApplyRecruitingInternships-sidebar-subheader">Recruitment</h4>
          <li>
            <Link
              to="/recruitingemployees"
              className={`ApplyRecruitingInternships-sidebar-link ${
                location.pathname === "/recruitingemployees" ||
                location.pathname === "/morerecruitingemployees" ||
                location.pathname === "/applyrecruitingemployees"
                  ? "active"
                  : ""
              }`}
            >
              Recruiting employees
            </Link>
          </li>
          <li>
            <Link
              to="/recruitinginternships"
              className={`ApplyRecruitingInternships-sidebar-link ${
                location.pathname === "/recruitinginternships" ||
                location.pathname === "/morerecruitinginternships" ||
                location.pathname === "/applyrecruitinginternships"
                  ? "active"
                  : ""
              }`}
            >
              Recruiting internships
            </Link>
          </li>
          <h4 className="ApplyRecruitingInternships-sidebar-subheader">Status</h4>
          <li>
            <Link
              to="/applicantstatus"
              className={`ApplyRecruitingInternships-sidebar-link ${
                location.pathname === "/applicantstatus" ? "active" : ""
              }`}
            >
              Applicant status
            </Link>
          </li>
          <h4 className="ApplyRecruitingInternships-sidebar-subheader">Information</h4>
          <li>
            <Link
              to="/profile"
              className={`ApplyRecruitingInternships-sidebar-link ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="ApplyRecruitingInternships-logout-container">
          <button className="ApplyRecruitingInternships-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="ApplyRecruitingInternships-main-content">
        <header className="ApplyRecruitingInternships-header">
          <h1 className="ApplyRecruitingInternships-header-title">
            Application for {job?.title || "Tester (QA)"}
          </h1>
        </header>

        <div className="ApplyRecruitingInternships-form-container">
          <h2 className="ApplyRecruitingInternships-section-title">Upload Required Documents</h2>
          <form onSubmit={handleSubmit}>
            <div className="ApplyRecruitingInternships-form-group">
              <label className="ApplyRecruitingInternships-form-label">Resume *</label>
              <div className="ApplyRecruitingInternships-file-input-wrapper">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, setResumeFile)}
                  className="ApplyRecruitingInternships-file-input"
                  id="resume-input"
                />
                <label htmlFor="resume-input" className="ApplyRecruitingInternships-file-button">
                  Choose File
                </label>
                {resumeFile && (
                  <span className="ApplyRecruitingInternships-file-name">{resumeFile.name}</span>
                )}
              </div>
            </div>

            <div className="ApplyRecruitingInternships-form-group">
              <label className="ApplyRecruitingInternships-form-label">Portfolio *</label>
              <div className="ApplyRecruitingInternships-file-input-wrapper">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, setPortfolioFile)}
                  className="ApplyRecruitingInternships-file-input"
                  id="portfolio-input"
                />
                <label htmlFor="portfolio-input" className="ApplyRecruitingInternships-file-button">
                  Choose File
                </label>
                {portfolioFile && (
                  <span className="ApplyRecruitingInternships-file-name">{portfolioFile.name}</span>
                )}
              </div>
            </div>

            <div className="ApplyRecruitingInternships-form-group">
              <label className="ApplyRecruitingInternships-form-label">Educational Certificates *</label>
              <div className="ApplyRecruitingInternships-file-input-wrapper">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, setEducationalCertificates)}
                  className="ApplyRecruitingInternships-file-input"
                  id="educational-certificates-input"
                />
                <label htmlFor="educational-certificates-input" className="ApplyRecruitingInternships-file-button">
                  Choose File
                </label>
                {educationalCertificates && (
                  <span className="ApplyRecruitingInternships-file-name">{educationalCertificates.name}</span>
                )}
              </div>
            </div>

            <div className="ApplyRecruitingInternships-submit-container">
              <button type="submit" className="ApplyRecruitingInternships-submit-button">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyRecruitingInternships;