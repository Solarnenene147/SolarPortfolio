import React, { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(() => {
    // Lấy trạng thái từ localStorage nếu có
    const saved = localStorage.getItem("darkMode");
    return saved === "true" ? true : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        fontSize: "22px",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
