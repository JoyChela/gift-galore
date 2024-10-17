import React, { useState } from "react";
import "./LoginRegister.css"; // Import the styles

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register-container">
      <div className={`form-box ${isLogin ? "login" : "register"}`}>
        {isLogin ? (
          <form className="form">
            <h2>Login to Account</h2>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot-link">
              Forgot password or username? Click here
            </a>
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <span onClick={toggleForm} className="switch-form">
                Create one
              </span>
            </p>
          </form>
        ) : (
          <form className="form">
            <h2>Create Account</h2>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Password Re-type" required />
            <button type="submit" className="btn-primary">
              Register
            </button>
            <p>
              Already have an account?{" "}
              <span onClick={toggleForm} className="switch-form">
                Login here
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
