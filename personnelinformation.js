import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./personnelinformation.css";

function PersonnelInformation() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [personnelData, setPersonnelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await fetch("http://localhost:3307/personnel");
        const data = await response.json();
        if (response.ok) {
          setPersonnelData(data);
        } else {
          setError(data.error || "Error fetching personnel");
        }
      } catch (error) {
        setError("Failed to connect to server");
      } finally {
        setLoading(false);
      }
    };
    fetchPersonnel();
  }, []);

  const handleLogout = () => navigate("/");
  const handleMore = (id) => navigate(`/morepersonnel/${id}`);
  const handleAdd = () => navigate("/addpersonnel");
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredPersonnel = personnelData.filter((person) =>
    (person.name?.toLowerCase().includes(searchTerm.toLowerCase()) || "") ||
    (person.position?.toLowerCase().includes(searchTerm.toLowerCase()) || "") ||
    (person.id?.toString().toLowerCase().includes(searchTerm.toLowerCase()) || "")
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="personnel-no-personnel">{error}</div>;

  return (
    <div className="personnel-container">
      <aside className="personnel-sidebar">
        <div className="personnel-logo"></div>
        <h2>Admin</h2>
        <ul>
          <li>
            <Link to="/personnelinformation" className="personnel-sidebar-link">
              Personnel Information
            </Link>
          </li>
          <li>
            <Link to="/addAnnouncement" className="personnel-sidebar-link">
              Announcement
            </Link>
          </li>
          <h4 className="personnel-sidebar-subheader">Recruitment</h4>
          <li>
            <Link to="/jobs" className="personnel-sidebar-link">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/examinationresults" className="personnel-sidebar-link">
              Examination Results
            </Link>
          </li>
          <li>
            <Link to="/checklist" className="personnel-sidebar-link">
              Check List
            </Link>
          </li>
        </ul>
        <div className="personnel-logout-container">
          <button className="personnel-logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </aside>

      <div className="personnel-main-content">
        <header className="personnel-header">
          <h1 className="personnel-header-title">Personnel Information</h1>
        </header>

        <div className="personnel-header-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="personnel-search-input"
          />
          <button className="personnel-add-button" onClick={handleAdd}>
            Add
          </button>
        </div>

        <div className="personnel-list">
          {filteredPersonnel.length > 0 ? (
            filteredPersonnel.map((person) => (
              <div
                key={person.id}
                className="personnel-item"
                onClick={() => handleMore(person.id)}
              >
                <span>{person.name}</span>
              </div>
            ))
          ) : (
            <p className="personnel-no-personnel">ไม่พบข้อมูลบุคลากร</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonnelInformation;