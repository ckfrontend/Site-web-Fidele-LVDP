import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  // Force le mode clair par défaut si rien n'est trouvé dans localStorage
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Applique le thème au document lorsque le composant est monté
    document.documentElement.setAttribute('data-theme', theme);
    // Sauvegarde le thème dans localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Appliquer le thème dès que la page se charge
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []); // Se déclenche une seule fois au montage du composant

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
