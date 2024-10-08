// libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "./components/app/app";

// internationalization
import "./i18n/config";

// styles
import "./index.css";

// content

const root = createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
