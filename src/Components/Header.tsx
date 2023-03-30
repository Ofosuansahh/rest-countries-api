import React from "react";
import { useTheme } from "../hooks/useTheme";
// import sunny from "../svgs/sunny-outline.svg";
import moon from "../svgs/moon-outline.svg";
import man from "../svgs/man.png"

export const Header = () => {
  const { onToggleTheme, isDarkTheme, isDarkImo } = useTheme();

  return (
    <header className="header">
      <div className="header__container">
        <h1>Where in the world?</h1>
        <div className="theme_switch" onClick={onToggleTheme}>
          <img id="theme_logo" src={isDarkImo ? moon : man} alt="logo" />
          <p>{isDarkTheme ? "Light Mode" : "Dark Mode"}</p>
        </div>
      </div>
    </header>
  );
};
