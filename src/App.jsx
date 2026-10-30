import { useState } from "react";
import "./App.css";
import navIcon from "./assets/nav-icon.png";

function PayPalLogo() {
  return (
    <img className="paypal-logo" src={navIcon} alt="PayPal" />
  );
}

function Navbar() {
  const menuItems = ["Personal", "Business", "Partners", "Useful Info"];

  return (
    <header className="navbar">
      <div className="nav-container">
        <PayPalLogo />

        <nav className="nav-links">
          {menuItems.map((item) => (
            <button className="nav-link" key={item}>
              {item}
              <span className="chevron"></span>
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [activeTab, setActiveTab] = useState("Business");

  const isBusiness = activeTab === "Business";

  return (
    <main className="hero">
      <div className="hero-content">

        <div className="toggle-container">
          <button
            className={`toggle-option ${
              !isBusiness ? "active" : ""
            }`}
            onClick={() => setActiveTab("Personal")}
          >
            Personal
          </button>

          <button
            className={`toggle-option ${
              isBusiness ? "active" : ""
            }`}
            onClick={() => setActiveTab("Business")}
          >
            Business
          </button>
        </div>

        <h1>PayPal Open</h1>

        <h2>
          {isBusiness
            ? "One platform for your business needs"
            : "One platform for your personal needs"}
        </h2>

        <p className="hero-description">
          {isBusiness
            ? "PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead."
            : "PayPal makes it simple to pay, send money, and manage your payments with confidence."}
        </p>

        <div className="hero-actions">
          <button className="primary-button">Sign Up</button>
          <button className="secondary-button">
            {isBusiness ? "Contact Sales" : "Learn More"}
          </button>
        </div>

      </div>
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;