import { useState, useEffect } from "react";
import "./App.css";
import SearchWord from "./SearchWord.jsx";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let imgs = document.querySelectorAll(".img");

    if (isDarkMode) {
      document.querySelector("#root").classList.add("dark");
      imgs.forEach((img) => {
        img.classList.add("dark-img");
      });
    } else {
      document.querySelector("#root").classList.remove("dark");
      imgs.forEach((img) => {
        img.classList.remove("dark-img");
      });
    }
  }, [isDarkMode]);

  return (
    <>
      <SearchWord defaultWord="hello" />

      <DarkModeSwitch
        className="dark-mode"
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        onChange={setIsDarkMode}
        size={35}
        moonColor={"#d5eb05"}
        sunColor={"#111f22"}
      />

      <footer>
        This project was coded by <b>Annd</b> and it's on{" "}
        <a href="https://github.com/anndcodes/dictionary" target="_blank">Github</a>
      </footer>
    </>
  );
}

export default App;
