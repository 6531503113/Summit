import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import "./addjob.css";

function Addjob() {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    num_accepted: "",
    work_format_id: "",
    location: "",
    salary: "",
    responsibilities: "",
    deadline: "",
    gender: "",
    age_range: "",
    education_level: ""
  });


  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value
    });
  };

  // ฟังก์ชันเมื่อกด Save
  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูลฟอร์มว่าครบหรือไม่
    if (!jobData.title || !jobData.description || !jobData.salary || !jobData.location || !jobData.work_format_id) {
      alert("Please fill in all the required fields.");
      return;
    }

    // เริ่มการส่งข้อมูลไปยังเซิร์ฟเวอร์
    setLoading(true); // เปลี่ยนสถานะของปุ่มเป็นกำลังโหลด

    axios
      .post("http://localhost:3307/jobs", jobData)
      .then((response) => {
        console.log(response.data);
        alert("Job added successfully!");
        navigate("/addAnnouncement"); // เปลี่ยนหน้าไปที่ /jobs หลังจากเพิ่มข้อมูลสำเร็จ
      })
      .catch((error) => {
        console.error("Error adding job:", error);
        if (error.response) {
          console.log("Error response:", error.response.data);
          alert(`Failed to add job: ${error.response.data.message || error.response.statusText}`);
        } else {
          alert("Failed to add job: No response from server.");
        }
      })
      .finally(() => {
        setLoading(false); // เปลี่ยนสถานะของปุ่มกลับมาเป็นปกติ
      });
  };

  return (
    <div className="recruitment-container">
      <aside className="sidebar">
        <div className="logo"></div>
        <h2 className="sidebar-title">Admin</h2>
        <ul className="sidebar-menu">
          <li><Link to="/personnelinformation" className="sidebar-link active"> Personal Information</Link></li>
          <li><Link to="/addAnnouncement" className="sidebar-link">Announcement</Link></li>
          <h4 className="sidebar-subheader">Recruitment</h4>
          <li><Link to="/jobs" className="sidebar-link">Jobs</Link></li>
          <li><Link to="/examinationresults" className="sidebar-link">Examination Results</Link></li>
          <li><Link to="/checklist" className="sidebar-link">Check List</Link></li>
        </ul>

        <div className="logout-container">
          <button className="logout-button" onClick={() => navigate("/")}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Recruiting </h1>
        </header>

        <div className="job-form-container">
          <form className="job-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-section left">
                <label>Job position</label>
                <select 
                  className="short-input" 
                  name="title" 
                  value={jobData.title} 
                  onChange={handleChange}
                >
                  <option value="">Select job position</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>

                <label>Job description</label>
                <textarea 
                  name="description" 
                  value={jobData.description} 
                  onChange={handleChange} 
                  placeholder="Job description"
                />

                <label>Number accepted</label>
                <input 
                  type="number" 
                  name="num_accepted" 
                  value={jobData.num_accepted} 
                  onChange={handleChange} 
                  placeholder="Number of employees" 
                />

               <label>Work format</label>
                <select 
                  name="work_format_id" 
                  value={jobData.work_format_id} 
                  onChange={handleChange}
                >
                  <option value="">Select format</option>
                  <option value="1">Full-time</option>
                  <option value="2">Part-time</option>
                </select>

                <label>Work location</label>
                <select 
                  name="location" 
                  value={jobData.location} 
                  onChange={handleChange}
                >
                  <option value="">Select location</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Chiang Rai">Chiang Rai</option>
                </select>

                <label>Salary (Bath)</label>
                <input 
                  type="number" 
                  name="salary" 
                  value={jobData.salary} 
                  onChange={handleChange} 
                  placeholder="Salary" 
                />

                <label>Working hours</label>
                <input 
                  type="text" 
                  name="working_hours" 
                  value={jobData.working_hours} 
                  onChange={handleChange} 
                  placeholder="Working hours" 
                />

                <label>Responsibilities</label>
                <textarea 
                  name="responsibilities" 
                  value={jobData.responsibilities} 
                  onChange={handleChange} 
                  placeholder="Responsibilities" 
                />
              </div>

              <div className="form-section right">
                <label>Features</label>

                <label>Application accepted until</label>
                <input 
                  type="date" 
                  name="deadline" 
                  value={jobData.deadline} 
                  onChange={handleChange} 
                />

                <label>Gender</label>
                <select 
                  name="gender" 
                  value={jobData.gender} 
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Any">Any</option>
                </select>

                <label>Age range</label>
                <input 
                  type="text" 
                  name="age_range" 
                  value={jobData.age_range} 
                  onChange={handleChange} 
                  placeholder="Age range" 
                />

                <label>Education level</label>
                <select 
                  name="education_level" 
                  value={jobData.education_level} 
                  onChange={handleChange}
                >
                  <option value="">Select Education level</option>
                  <option value="High-school">High School</option>
                  <option value="Bachelor">Bachelor's Degree</option>
                  <option value="Master">Master's Degree</option>
                </select>
              </div>
            </div>

            <div className="form-buttons">
              <button type="button" className="draft-button">Draft</button>
              <button 
                type="submit" 
                className="save-button" 
                disabled={loading} // ป้องกันการกดปุ่มหลายครั้ง
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addjob;
