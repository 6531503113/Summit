import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddAnnouncement.css";

function AddAnnouncement() {
  const navigate = useNavigate();  

  const handleLogout = () => {
    navigate("/"); // ไปยังหน้าแรก
  };

  const handleAdd = () => {
    navigate("/addjob"); 
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Recruiting</h2> {/* เปลี่ยนจาก Admin เป็น Recruiting */}
        <ul>
          
          <li><a href="/ไปไหน"><i className="fas fa-user"></i>Personal information</a></li>
          <li><a href="/addAnnouncement">Announcement</a></li>
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
          <h1>Recruiting</h1> {/* เปลี่ยนหัวข้อจาก Admin เป็น Recruiting */}
        </header>
        <div className="announcement-box">
          <div className="no-announcement">Not has announcement</div> {/* ข้อความใหม่ */}
          <button className="add-button" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddAnnouncement;
