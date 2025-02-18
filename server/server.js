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
  database: "signup", 
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
            return res.status(201).json({ message: "User registered successfully!" });
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



app.listen(3307, () => {
    console.log("hi");
});
