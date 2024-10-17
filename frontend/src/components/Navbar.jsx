import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Home, UserPlus, Info, ShoppingCart, User } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with gift icon */}
        <div
          className="navbar-logo"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          aria-label="Go to home"
        >
          <span className="logo-text">Gift</span>
          <span className="logo-icon" role="img" aria-label="Gift icon">
            🎁
          </span>
          <span className="logo-text">Galore</span>
        </div>

        <div className="navbar-items">
          {/* Search bar toggle */}
          {searchVisible ? (
            <SearchBar
              onClose={() => setSearchVisible(false)}
              onSearch={(query) => {
                onSearch(query);
                navigate("/search");
                setSearchVisible(false);
              }}
            />
          ) : (
            <button
              onClick={() => setSearchVisible(true)}
              className="navbar-item"
              aria-label="Open search"
            >
              <Search size={20} />
            </button>
          )}

          {/* Navigation links */}
          <NavItem icon={<Home size={20} />} text="Home" onClick={() => navigate("/")} />
          <NavItem icon={<Info size={20} />} text="About us" onClick={() => navigate("/about")} />
          <NavItem icon={<UserPlus size={20} />} text="Sign up" onClick={() => navigate("/signup")} />
          <NavItem icon={<ShoppingCart size={20} />} text="Cart" onClick={() => navigate("/checkout")} />
          <NavItem icon={<User size={20} />} text="Profile" onClick={() => navigate("/profile")} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = React.memo(({ icon, text, onClick }) => (
  <button className="navbar-item" onClick={onClick} aria-label={text}>
    {icon}
    <span>{text}</span>
  </button>
)); 

export default Navbar;
