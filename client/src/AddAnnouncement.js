import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import "./addAnnouncement.css";
=======
import "./AddAnnouncement.css";
>>>>>>> 208ec9e8029192f56cbd0098cfea563c41eae71e

function AddAnnouncement() {
  const navigate = useNavigate();  

  const handleLogout = () => {
<<<<<<< HEAD
    navigate("/home");
=======
    navigate("/"); // ไปยังหน้าแรก
  };

  const handleAdd = () => {
    navigate("/addjob"); 
>>>>>>> 208ec9e8029192f56cbd0098cfea563c41eae71e
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2>Recruiting</h2> {/* เปลี่ยนจาก Admin เป็น Recruiting */}
        <ul>
<<<<<<< HEAD
          <li><a href="/ไปไหน"><i className="fas fa-user"></i>Personal information</a></li>
          <li><a href="/ไปไหน">Announcement</a></li>
=======
          
          <li><a href="/ไปไหน"><i className="fas fa-user"></i>Personal information</a></li>
          <li><a href="/addAnnouncement">Announcement</a></li>
>>>>>>> 208ec9e8029192f56cbd0098cfea563c41eae71e
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
<<<<<<< HEAD
          <button className="add-button">Add</button> {/* ปุ่ม Add อยู่ขวาล่างของกรอบ */}
=======
          <button className="add-button" onClick={handleAdd}>Add</button>
>>>>>>> 208ec9e8029192f56cbd0098cfea563c41eae71e
        </div>
      </div>
    </div>
  );
}

export default AddAnnouncement;
