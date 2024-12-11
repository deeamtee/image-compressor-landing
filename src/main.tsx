import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import "./localization/i18n.ts";

function updateFavicon() {
  const favicon = document.getElementById("favicon") as HTMLLinkElement;
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  favicon.href = isDarkMode ? "/favicon-light.svg" : "/favicon-dark.svg";
}

updateFavicon();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
