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
        size={40}
        moonColor={"#d5eb05"}
        sunColor={"#111f22"}
      />
    </>
  );
}

export default App;
