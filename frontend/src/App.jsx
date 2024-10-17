import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import About from "./components/About";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage("search");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "search":
        return <SearchResults query={searchQuery} />;
      case "checkout":
        return <Checkout />;
      default:
        return null; 
    }
  };

  return (
    <div className="app">
      <Navbar
        onSearch={handleSearch}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      <main className="main-content">{renderCurrentPage()}</main>
      <footer className="footer">
        <div className="footer-content">
          <span>© 2024 Gift Galore. All rights reserved.</span>
          <button
            onClick={() => setCurrentPage("about")}
            className="footer-link"
          >
            About Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
