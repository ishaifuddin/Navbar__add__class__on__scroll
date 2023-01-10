import { useState } from "react";
import "./styles.css";

export default function App() {
  /* START: Add class on Scroll */
  const [menus, setActive] = useState(false);
  const changedBg = () => {
    if (window.scrollY >= 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", changedBg);
  /* END: Add class on Scroll */
  return (
    <div className="App">
      <nav className={`menus ${menus ? "active" : "menus"}`}></nav>
      <h1 style={{ marginTop: "300px" }}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ height: "500vh" }}></div>
    </div>
  );
}
