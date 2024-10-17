import React, { useState } from "react";
import { Search, Home, UserPlus, Info, ShoppingCart, User } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ onSearch, onNavigate, currentPage }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => onNavigate("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onNavigate("home")}
          aria-label="Go to home"
        >
          Gift Galore
        </div>

        <div className="navbar-items">
          {searchVisible ? (
            <SearchBar
              onClose={() => setSearchVisible(false)}
              onSearch={(query) => {
                onSearch(query);
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
              <span>Search</span>
            </button>
          )}

          <NavItem
            icon={<Home size={20} />}
            text="Home"
            onClick={() => onNavigate("home")}
            active={currentPage === "home"}
          />
          <NavItem
            icon={<Info size={20} />}
            text="About"
            onClick={() => onNavigate("about")}
            active={currentPage === "about"}
          />
          <NavItem
            icon={<UserPlus size={20} />}
            text="Sign Up"
            onClick={() => onNavigate("signup")}
            active={currentPage === "signup"}
          />
          <NavItem
            icon={<ShoppingCart size={20} />}
            text="Cart"
            onClick={() => onNavigate("cart")}
            active={currentPage === "cart"}
          />
          <NavItem
            icon={<User size={20} />}
            text="Profile"
            onClick={() => onNavigate("profile")}
            active={currentPage === "profile"}
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem = React.memo(({ icon, text, onClick, active }) => (
  <button
    className={`navbar-item ${active ? "active" : ""}`}
    onClick={onClick}
    aria-label={text}
  >
    {icon}
    <span>{text}</span>
  </button>
));

export default Navbar;
