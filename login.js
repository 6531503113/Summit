import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./loginValidation";
import axios from "axios";
import "./login.css"; 

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loginErrors, setLoginErrors] = useState({}); // State สำหรับ error จาก server
    
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        setLoginErrors({}); // รีเซ็ต login errors
    
        if (!validationErrors.email && !validationErrors.password) {
            axios.post("http://localhost:3307/login", values)
                .then(res => {
                    console.log("Login response:", res.data);
                    if (res.data.message === "Success") {
                        navigate("/addAnnouncement");
                    } else {
                        setLoginErrors({
                            email: "Email should not empty",
                            password: "Password should not empty"
                        });
                    }
                })
                .catch(err => {
                    if (err.response) {
                        console.error("Login Error:", err.response.data);
                        setLoginErrors({
                            email: "Email should not empty",
                            password: "Password should not empty"
                        });
                    } else {
                        console.error("Network Error:", err);
                        setLoginErrors({
                            email: "Email should not empty",
                            password: "Password should not empty"
                        });
                    }
                });
        }
    };
    
    return (
        <div className="login-container">
            {/* ส่วนซ้าย: ฟอร์ม */}
            <div className="login-form">
                <div className="logo"/>
                <h2>Login</h2>
                <p>Login to your account.</p>
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter Email"
                        onChange={handleInput} className="input-field"/>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                    {loginErrors.email && <span className="error-text">{loginErrors.email}</span>}

                    <div className={`password-section ${loginErrors.email ? 'with-login-error' : ''}`}>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter Password"
                            onChange={handleInput} className="input-field"/>
                        {errors.password && <span className="error-text">{errors.password}</span>}
                        {loginErrors.password && <span className="error-text">{loginErrors.password}</span>}
                        
                        <div className="remember-forgot">
                            <Link to="/signup" className="create-account">Create an account</Link>
                        </div>

                        <button type="submit" className="signin-btn">Sign In</button>
                    </div>
                </form>
            </div>

            {/* ส่วนขวา: พื้นหลังภาพ */}
            <div className="login-image"></div>
        </div>
    );
}

export default Login;