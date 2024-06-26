import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer">
      This project was coded by{" "}
      <a
        href="https://github.com/fedelia-chejieh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fedelia Chejieh,
      </a>{" "}
      is{" "}
      <a
        href="https://github.com/fedelia-chejieh/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on Github
      </a>{" "}
      and{" "}
      <a
        href="https://elaborate-blini-e170c7.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
