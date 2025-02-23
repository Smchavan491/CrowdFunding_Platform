import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const LoginForm = () => {
    const [role, setRole] = useState("admin");
    const navigate = useNavigate();

    useEffect(() => {
        const createBubbles = () => {
            const bubbleContainer = document.querySelector(".bubble-container");
            for (let i = 0; i < 20; i++) {
                let bubble = document.createElement("div");
                bubble.classList.add("bubble");
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;
                bubbleContainer.appendChild(bubble);
            }
        };
        createBubbles();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully!`);
        navigate("/dashboard");
    };

    return (
        <div className="container-fluid d-flex align-items-center auth-container">
            <div className="image-container position-relative">
                <img src="/images/img6 (1).jpg" alt="Auth Illustration" className="img-fluid w-100 h-100" />
                <div className="bubble-container"></div>
                <h1 className="image-text">Welcome Back</h1>
            </div>
            <div className="card p-4 shadow mx-auto auth-form">
                <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                        <button className={`nav-link ${role === "admin" ? "active" : ""}`} onClick={() => setRole("admin")}>
                            Admin
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${role === "donor" ? "active" : ""}`} onClick={() => setRole("donor")}>
                            Donor
                        </button>
                    </li>
                </ul>
                <h3 className="text-center text-white">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h3>
                <form onSubmit={handleSubmit} className="auth-form-box">
                    <div className="mb-3">
                        <label className="form-label text-white">Email</label>
                        <input type="email" className="form-control" placeholder="Email: example@gmail.com" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Password</label>
                        <input type="password" className="form-control" placeholder="Password: ********" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <p className="text-center mt-3 text-white">
                    Don't have an account?{" "}
                    <button className="btn btn-link p-0 text-primary" onClick={() => navigate("/register")}>
                        Register
                    </button>
                </p>
            </div>

            {/* Inline CSS */}
            <style>{`
                .auth-container {
                    height: 100vh;
                    background-color: #282c34;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .auth-form {
                    width: 400px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    box-shadow: 0px 4px 15px #282c34;
                    backdrop-filter: blur(10px);
                }

                .text-white {
                    color: white;
                }

                .input-box {
                    height: 50px;
                    font-size: 16px;
                }

                .input-box::placeholder {
                    font-size: 14px;
                }

                .nav-tabs .nav-item .nav-link {
                    color: white;
                }

                .nav-tabs .nav-item .nav-link.active {
                    background-color: #282c34;
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default LoginForm;
