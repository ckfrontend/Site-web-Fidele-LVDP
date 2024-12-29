import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  // Initialise le thème sur 'light' par défaut si rien n'est trouvé dans localStorage
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Applique le thème au document
    document.documentElement.setAttribute('data-theme', theme);
    // Sauvegarde le thème dans localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
