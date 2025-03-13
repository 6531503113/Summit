import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./personnelinformation.css";

function PersonnelInformation() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const personnelData = [
    { id: "103459", name: "Mr. LingNokKuan Muenang", position: "UX/UI Design", category: "Applicant", nationalId: "1578805564581", address: "111 Chiang Mai, Thailand", email: "lingnokkuan@gmail.com", phone: "081-123-4567", dateOfBirth: "15/05/1990", employmentStatus: "Full-time", dateOfEmployment: "01/04/2564", educationLevel: "Bachelor's degree", institution: "Chiang Mai University", fieldOfStudy: "UX/UI Design", gpa: "3.85", graduationYear: "2558" },
    { id: "103808", name: "Ms. Somsee Seerueangsang", position: "Front-end Developer", category: "Applicant", nationalId: "1578805564582", address: "222 Bangkok, Thailand", email: "somsee@gmail.com", phone: "082-234-5678", dateOfBirth: "20/07/1992", employmentStatus: "Full-time", dateOfEmployment: "15/05/2564", educationLevel: "Bachelor's degree", institution: "Chulalongkorn University", fieldOfStudy: "Computer Science", gpa: "3.90", graduationYear: "2559" },
    { id: "103901", name: "Mr. Tuktoo Prawee", position: "Front-end Developer", category: "Applicant", nationalId: "1578805564583", address: "333 Phuket, Thailand", email: "tuktoo@gmail.com", phone: "083-345-6789", dateOfBirth: "10/03/1988", employmentStatus: "Full-time", dateOfEmployment: "20/06/2564", educationLevel: "Bachelor's degree", institution: "Thammasat University", fieldOfStudy: "Information Technology", gpa: "3.70", graduationYear: "2557" },
    { id: "102475", name: "Mr. Glomkriao Lammakmai", position: "Front-end Developer", category: "Officer", nationalId: "1578805564589", address: "333 Tha Sut, Mueang Chiang Rai District, Chiang Rai 57000", email: "glomkiao.lammakmai@gmail.com", phone: "087-531-4597", dateOfBirth: "22/11/1985", employmentStatus: "Full-time", dateOfEmployment: "13/03/2563", educationLevel: "Bachelor's degree", institution: "Mae Fah Luang University", fieldOfStudy: "Software Engineering", gpa: "4.00", graduationYear: "2554" },
    { id: "102476", name: "Mr. Sommai Thalakkampheang", position: "Programmer", category: "Officer", nationalId: "1578805564585", address: "555 Nonthaburi, Thailand", email: "sommai@gmail.com", phone: "085-567-8901", dateOfBirth: "05/09/1987", employmentStatus: "Full-time", dateOfEmployment: "10/02/2563", educationLevel: "Bachelor's degree", institution: "King Mongkut's University of Technology", fieldOfStudy: "Computer Engineering", gpa: "3.65", graduationYear: "2556" },
    { id: "102598", name: "Ms. Munnub Khayapsai", position: "Back-end Developer", category: "Officer", nationalId: "1578805564586", address: "666 Pattaya, Thailand", email: "munnub@gmail.com", phone: "086-678-9012", dateOfBirth: "12/12/1990", employmentStatus: "Full-time", dateOfEmployment: "25/03/2563", educationLevel: "Bachelor's degree", institution: "Mahidol University", fieldOfStudy: "Information Technology", gpa: "3.80", graduationYear: "2558" },
    { id: "103780", name: "Ms. Mangkon Chonguang", position: "UX/UI Design", category: "Officer", nationalId: "1578805564587", address: "777 Ayutthaya, Thailand", email: "mangkon@gmail.com", phone: "087-789-0123", dateOfBirth: "18/01/1993", employmentStatus: "Full-time", dateOfEmployment: "30/04/2564", educationLevel: "Bachelor's degree", institution: "Silpakorn University", fieldOfStudy: "Graphic Design", gpa: "3.95", graduationYear: "2559" },
    { id: "104003", name: "Mr. Baanphap Pratoohin", position: "Programmer", category: "Deleted", nationalId: "1578805564588", address: "888 Chiang Rai, Thailand", email: "baanphap@gmail.com", phone: "088-890-1234", dateOfBirth: "25/06/1986", employmentStatus: "Terminated", dateOfEmployment: "05/01/2562", educationLevel: "Bachelor's degree", institution: "Kasetsart University", fieldOfStudy: "Computer Science", gpa: "3.60", graduationYear: "2555" },
  ];

  const handleLogout = () => {
    navigate("/home");
  };

  const handleAdd = () => {
    navigate("/addpersonnel");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle navigation to Morepersonnal page with person's data
  const handlePersonClick = (person) => {
    navigate("/morepersonnal", { state: { person } });
  };

  const filteredPersonnel = personnelData.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorizedPersonnel = {
    Applicants: filteredPersonnel.filter((person) => person.category === "Applicant"),
    Officers: filteredPersonnel.filter((person) => person.category === "Officer"),
    Deleted: filteredPersonnel.filter((person) => person.category === "Deleted"),
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/personnelinformation" className="sidebar-link ">
              Personal Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="sidebar-link">Jobs</Link>
          </li>
          <li>
            <Link to="/examinationresults" className="sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="sidebar-link">Check List</Link>
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
          <h1 className="header-title">Personnel Information</h1>
        </header>

        {/* Search Bar and Add Button */}
        <div className="personnel-header">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="add-button" onClick={handleAdd}>
            Add
          </button>
        </div>

        {/* Personnel List with Categories */}
        <div className="personnel-list">
          {["Applicants", "Officers", "Deleted"].map((category) => (
            <div key={category}>
              <h3 className="category-title">{category}</h3>
              <div className="personnel-category">
                {categorizedPersonnel[category].map((person) => (
                  <div
                    key={person.id}
                    className="personnel-item"
                    onClick={() => handlePersonClick(person)} // Make the item clickable
                    style={{ cursor: "pointer" }} // Add pointer cursor for better UX
                  >
                    <span>{person.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonnelInformation;