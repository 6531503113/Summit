import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./personnelinformation.css";

function PersonnelInformation() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const personnelData = [
    { id: "103459", name: "Mr. LingNokKuan Muenang", position: "UX/UI Design", category: "Applicant" },
    { id: "103808", name: "Ms. Somsee Seerueangsang", position: "Front-end Developer", category: "Applicant" },
    { id: "103901", name: "Mr. Tuktoo Prawee", position: "Front-end Developer", category: "Applicant" },
    { id: "102475", name: "Mr. Glomkriao Lammakmai", position: "Front-end Developer", category: "Officer" },
    { id: "102476", name: "Mr. Sommai Thalakkampheang", position: "Programmer", category: "Officer" },
    { id: "102598", name: "Ms. Munnub Khayapsai", position: "Back-end Developer", category: "Officer" },
    { id: "103780", name: "Ms. Mangkon Chonguang", position: "UX/UI Design", category: "Officer" },
    { id: "104003", name: "Mr. Baanphap Pratoohin", position: "Programmer", category: "Deleted" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleAdd = () => {
    navigate("/addpersonnel");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
    <div className="personnel-container">
      <aside className="personnel-sidebar">
        <div className="personnel-logo"></div>
        <h2 className="personnel-sidebar-title">Admin</h2>
        <ul className="personnel-sidebar-menu">
          <li><Link to="/personnelinformation" className="personnel-sidebar-link">Personnel Information</Link></li>
          <li><Link to="/addAnnouncement" className="personnel-sidebar-link">Announcement</Link></li>
          <h4 className="personnel-sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="personnel-sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="personnel-sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="personnel-sidebar-link">Check List</Link></li>
        </ul>
        <div className="personnel-logout-container">
          <button className="personnel-logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="personnel-main-content">
        <header className="personnel-header">
          <h1 className="personnel-header-title">Personnal Information</h1>
        </header>

        <div className="personnel-header-controls">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="personnel-search-input"
          />
          <button className="personnel-add-button" onClick={handleAdd}>Add</button>
        </div>

        <div className="personnel-list">
          {["Applicants", "Officers", "Deleted"].map((category) => (
            <div key={category}>
              <h3 className="personnel-category-title">{category}</h3>
              <div className="personnel-category">
                {categorizedPersonnel[category].map((person) => (
                  <div
                    key={person.id}
                    className="personnel-item"
                    onClick={() => handlePersonClick(person)}
                    style={{ cursor: "pointer" }}
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