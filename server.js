const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const saltRounds = 10; // ใช้ตัวแปรที่เหมาะสม

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "231046", 
  database: "summit", 
});

app.post('/signup', (req, res) => {
    const { email, password, phone, firstname, lastname } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const sql = "INSERT INTO login (email, password, phone, firstname, lastname) VALUES (?, ?, ?, ?, ?)";
        const values = [email, hash, phone, firstname, lastname];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).json({ error: "Database Error" });
            }
            return res.status(201).json({ message: "Success" });
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql, [email], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database Error" });
        }

        if (data.length > 0) {
            const hashedPassword = data[0].password;
            bcrypt.compare(password, hashedPassword, (err, result) => {
                if (err) {
                    console.error("Error comparing passwords:", err);
                    return res.status(500).json({ error: "Internal Server Error" });
                }
                if (result) {
                    console.log("Loginได้");
                    return res.json({ message: "Success" });
                } else {
                    console.log("รหัสผ่านผิด");
                    return res.status(401).json({ error: "Invalid credentials" });
                }
            });
        } else {
            console.log("ไม่พบอีเมล");
            return res.status(404).json({ error: "User not found" });
        }
    });
});
app.post('/jobs', (req, res) => {
    const { title, description, num_accepted, work_format_id, location, salary, responsibilities, deadline, gender, age_range, education_level } = req.body;

    const sql = "INSERT INTO jobs (title, description, num_accepted, work_format_id, location, salary, responsibilities, deadline, gender, age_range, education_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [title, description, num_accepted, work_format_id, location, salary, responsibilities, deadline, gender, age_range, education_level];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting job:", err);
            return res.status(500).json({ error: "Database Error" });
        }
        return res.status(201).json({ message: "Job added successfully!", jobId: result.insertId });
    });
});
app.get('/jobs', (req, res) => {
    const sql = "SELECT * FROM jobs";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database Error" });
        }
        return res.json(data);
    });
});

app.put('/update-job/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, num_accepted, location, salary, deadline, gender, age_range, education_level, work_format_id, responsibilities } = req.body;
  
    const sql = `
      UPDATE jobs 
      SET title = ?, description = ?, num_accepted = ?, location = ?, salary = ?, deadline = ?, gender = ?, age_range = ?, education_level = ?, work_format_id = ?, responsibilities = ?
      WHERE id = ?
    `;
    const values = [title, description, num_accepted, location, salary, deadline, gender, age_range, education_level, work_format_id, responsibilities, id];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ error: "Database Error" });
      }
      return res.json({ message: "Job updated successfully" });
    });
  });
  
app.delete('/delete-job/:id', (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM jobs WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database Error" });
        }
        return res.json({ message: "Job deleted successfully" });
    });
});
app.get('/jobs/:id', (req, res) => {
    const { id } = req.params; 

    const sql = "SELECT * FROM jobs WHERE id = ?";
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database Error" });
        }
        if (data.length > 0) {
            return res.json(data[0]); 
        } else {
            return res.status(404).json({ error: "Job not found" }); 
        }
    });
});

app.listen(3307, () => {
    console.log("hi");
});
