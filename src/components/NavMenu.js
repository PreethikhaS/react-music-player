import React from "react";
import "./Navmenu.css";

const NavMenu = () => {
  return (
    <nav className="main-menu">
      <div>
        <div className="user-info">
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/37e5ccfa-f9ee-458b-afa2-dcd85b495e4e"
            alt="user"
          />
          <p>Jane Wilson</p>
        </div>
        <ul>
          {["Discover", "Trending", "Album", "Playlist", "Favorites"].map((item, index) => (
            <li key={index} className={`nav-item ${index === 0 ? "active" : ""}`}>
              <a href="#">
                <i className={`fa fa-${item.toLowerCase()} nav-icon`}></i>
                <span className="nav-text">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {["Profile", "Settings", "Logout"].map((item, index) => (
          <li key={index} className="nav-item">
            <a href="#">
              <i className={`fa fa-${item.toLowerCase()} nav-icon`}></i>
              <span className="nav-text">{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;