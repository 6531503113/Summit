import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./employeeProfile.css";

function EmployeeProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    personalInfo: {
      name: "Mr. Glomjai Larnmaksa",
      employeeCode: "123456780",
      idCard: "1760501033545",
      phoneNumber: "095-123-4567",
      birthDate: "17 Dec 2000",
      nationality: "Thai",
      ethnicity: "Thai",
      religion: "Buddhism",
      bloodType: "O",
      jobPosition: "Developer",
      startDate: "1/23/2024",
    },
    address: {
      houseNumber: "123",
      street: "Soi 5",
      subdistrict: "Klong Koresing",
      district: "Bangphai",
      province: "Prachuap Khiri Khan",
      postalCode: "77000",
    },
    educationalHistory: {
      highSchool: {
        schoolName: "ABC School",
        graduationDate: "31/12/2018",
        gpa: "2.6",
      },
      university: {
        faculty: "Applied Digital Technology",
        degree: "Bachelor's Degree",
        major: "Software Engineering",
        graduationDate: "",
      },
    },
  });

  const handleLogout = () => {
    navigate("/home");
  };

  const handleInputChange = (section, field, value) => {
    setProfile((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("Profile saved:", profile);
    alert("Profile saved successfully!");
  };

  return (
    <div className="employee-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Employee</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/profile" className="sidebar-link active">
              <i className="fas fa-user"></i>Personal Information
            </Link>
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
          <h1 className="header-title">Employees</h1>
        </header>

        {/* Profile Form */}
        <div className="profile-form">
          <div className="profile-header">
            <button className="add-photo-button">Add photo</button>
            <h2>Personal Information</h2>
            <button className="edit-button">Edit Profile</button>
          </div>

          {/* Personal Information */}
          <div className="info-section">
            <div className="form-group">
              <label>Personnal Information</label>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Name - Last name</span>
                  <input
                    type="text"
                    placeholder="Last Name, First Name"
                    value={profile.personalInfo.name}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "name", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Employee Code</span>
                  <input
                    type="text"
                    placeholder="ES-XXXX-XX"
                    value={profile.personalInfo.employeeCode}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "employeeCode", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">ID Card</span>
                  <input
                    type="text"
                    placeholder="ID Card"
                    value={profile.personalInfo.idCard}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "idCard", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={profile.personalInfo.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "phoneNumber", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Birthdate</span>
                  <input
                    type="text"
                    placeholder="Birth Date"
                    value={profile.personalInfo.birthDate}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "birthDate", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Nationality</span>
                  <input
                    type="text"
                    placeholder="Nationality"
                    value={profile.personalInfo.nationality}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "nationality", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Ethnicity</span>
                  <input
                    type="text"
                    placeholder="Ethnicity"
                    value={profile.personalInfo.ethnicity}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "ethnicity", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Religion</span>
                  <input
                    type="text"
                    placeholder="Religion"
                    value={profile.personalInfo.religion}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "religion", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Blood Type</span>
                  <input
                    type="text"
                    placeholder="Blood Type"
                    value={profile.personalInfo.bloodType}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "bloodType", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Job Position</span>
                  <input
                    type="text"
                    placeholder="Job Position"
                    value={profile.personalInfo.jobPosition}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "jobPosition", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group full-width">
                  <span className="input-label">Start work date</span>
                  <input
                    type="text"
                    placeholder="Start work date"
                    value={profile.personalInfo.startDate}
                    onChange={(e) =>
                      handleInputChange("personalInfo", "startDate", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="form-group">
              <label>Address</label>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">House Number</span>
                  <input
                    type="text"
                    placeholder="House Number"
                    value={profile.address.houseNumber}
                    onChange={(e) =>
                      handleInputChange("address", "houseNumber", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Road</span>
                  <input
                    type="text"
                    placeholder="Street"
                    value={profile.address.street}
                    onChange={(e) =>
                      handleInputChange("address", "street", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Subdistrict</span>
                  <input
                    type="text"
                    placeholder="Subdistrict"
                    value={profile.address.subdistrict}
                    onChange={(e) =>
                      handleInputChange("address", "subdistrict", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">District</span>
                  <input
                    type="text"
                    placeholder="District"
                    value={profile.address.district}
                    onChange={(e) =>
                      handleInputChange("address", "district", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Province</span>
                  <input
                    type="text"
                    placeholder="Province"
                    value={profile.address.province}
                    onChange={(e) =>
                      handleInputChange("address", "province", e.target.value)
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Postal Code</span>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    value={profile.address.postalCode}
                    onChange={(e) =>
                      handleInputChange("address", "postalCode", e.target.value)
                    }
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Educational History */}
            <div className="form-group">
              <label>Educational History</label>
              <h3>High School</h3>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Graduated From</span>
                  <input
                    type="text"
                    placeholder="Graduated From"
                    value={profile.educationalHistory.highSchool.schoolName}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "highSchool.schoolName",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Date of Graduation</span>
                  <input
                    type="text"
                    placeholder="Date of Graduation"
                    value={profile.educationalHistory.highSchool.graduationDate}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "highSchool.graduationDate",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group full-width">
                  <span className="input-label">GPA</span>
                  <input
                    type="text"
                    placeholder="GPA"
                    value={profile.educationalHistory.highSchool.gpa}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "highSchool.gpa",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
              </div>

              <h3>University</h3>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Faculty</span>
                  <input
                    type="text"
                    placeholder="Faculty"
                    value={profile.educationalHistory.university.faculty}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "university.faculty",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Degree</span>
                  <input
                    type="text"
                    placeholder="Degree"
                    value={profile.educationalHistory.university.degree}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "university.degree",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <span className="input-label">Major</span>
                  <input
                    type="text"
                    placeholder="Major"
                    value={profile.educationalHistory.university.major}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "university.major",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <span className="input-label">Date of Graduation</span>
                  <input
                    type="text"
                    placeholder="Date of Graduation"
                    value={profile.educationalHistory.university.graduationDate}
                    onChange={(e) =>
                      handleInputChange(
                        "educationalHistory",
                        "university.graduationDate",
                        e.target.value
                      )
                    }
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="save-button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;