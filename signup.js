import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./signupValidation";
import axios from "axios";
import "./Signup.css" 

function Signup() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        firstname: "",
        lastname: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (isSubmitting && Object.keys(errors).length === 0) {
            axios
                .post("http://localhost:3307/signup", values)
                .then((res) => {
                    console.log("Signup response:", res.data);
                    if (res.data.message === "Success") {
                        navigate("/");
                    } else {
                        alert("Signup failed");
                    }
                })
                .catch((err) => {
                    console.error("Signup Error:", err);
                    alert("An error occurred. Please try again.");
                });
        }
    }, [errors, isSubmitting, navigate, values]);

    return (
        <div className="signup-container">
            <div className="signup-form">
                <div className="logo" />
                <h2>Welcome to Summit Computer</h2>
                <p>Register your account.</p>
            
                <form onSubmit={handleSubmit}>
                    {/* First Name & Last Name */}
                    <div className="name-container">
                        <div className="name-field">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="Enter First Name"
                                onChange={handleInput}
                                className="input-field"
                            />
                            {errors.firstname && <span className="error-text">{errors.firstname}</span>}
                        </div>

                        <div className="name-field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Enter Last Name"
                                onChange={handleInput}
                                className="input-field"
                            />
                            {errors.lastname && <span className="error-text">{errors.lastname}</span>}
                        </div>
                    </div>

                    {/* Phone Number */}
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        onChange={handleInput}
                        className="input-field"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}

                    {/* Email Address และส่วนล่าง */}
                    <div className={`email-section ${errors.phone ? 'with-phone-error' : ''}`}>
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                            className="input-field"
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}

                        {/* Password & Confirm Password */}
                        <div className="password-container">
                            <div className="password-field">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    onChange={handleInput}
                                    className="input-field"
                                />
                                {errors.password && <span className="error-text">{errors.password}</span>}
                            </div>

                            <div className="password-field">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={handleInput}
                                    className="input-field"
                                />
                                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                            </div>
                        </div>

                        <Link to="/" className="create-account">Already have an account?</Link>
                        <button type="submit" className="signin-btn">Register</button>
                    </div>
                </form>
            </div>

            {/* Signup Image Section */}
            <div className="signup-image"></div>
        </div>
    );
}

export default Signup;