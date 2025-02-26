import React from "react";
import { useNavigate } from "react-router-dom";
import "./addAnnouncement.css";

function AddAnnouncement() {
  const navigate = useNavigate();  

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Recruiting</h2> 
        <ul>
          <li><a href="/ไปไหน"><i className="fas fa-user"></i>Personal information</a></li>
          <li><a href="/ไปไหน">Announcement</a></li>
          <h4>Recruitment</h4>
          <li><a href="/ไปไหน">Jobs</a></li>
          <li><a href="/ไปไหน">Examination results</a></li>
          <li><a href="/ไปไหน">Check list</a></li>
        </ul>

        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Recruiting</h1> 
        </header>
        <div className="announcement-box">
          <div className="no-announcement">Not has announcement</div> 
          <button className="add-button">Add</button> 
        </div>
      </div>
    </div>
  );
}

export default AddAnnouncement;
