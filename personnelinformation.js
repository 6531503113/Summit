import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./personnelinformation.css";

function PersonnelInformation() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const personnelData = [
    { id: "102475", name: "Mr. Glomkriao Lammakmai", position: "Front-end Developer" },
    { id: "102476", name: "Mr. Sommai Thalakkampheang", position: "Programmer" },
    { id: "102598", name: "Ms. Munnub Khayapsai", position: "Back-end Developer" },
    { id: "103459", name: "Mr. LingNokKuan Muenang", position: "UX/UI Design" },
    { id: "103780", name: "Ms. Mangkon Chonguang", position: "UX/UI Design" },
    { id: "103808", name: "Ms. Somsee Seerueangsang", position: "Front-end Developer" },
    { id: "103901", name: "Mr. Tuktoo Prawee", position: "Front-end Developer" },
    { id: "104003", name: "Mr. Baanphap Pratoohin", position: "Programmer" },
  ];

  const handleLogout = () => {
    navigate("/home");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPersonnel = personnelData.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/profile" className="sidebar-link active"><i className="fas fa-user"></i> Personal Information</Link></li>
          <li><Link to="/announcement" className="sidebar-link">Announcement</Link></li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/exam-results" className="sidebar-link">Examination Results</Link></li>
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

        <div className="personnel-header">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="add-button">Add</button>
        </div>

        <div className="personnel-list">
          {filteredPersonnel.map((person) => (
            <div key={person.id} className="personnel-item">
              <span>ID: {person.id}</span>
              <span>{person.name}</span>
              <span>Position: {person.position}</span>
              <button className="more-button">more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonnelInformation;