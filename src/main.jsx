/**
 * Main React Entry Point
 *
 * This file bootstraps the React application for the WordPress theme.
 * It mounts the root React component(`TemplateMount`) into the DOM.
 * Designed for use in a React-based WordPress theme.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import TemplateMount from "./template-files/TemplateMount";

/** Import global CSS layers for the theme */
import "./css/base.css";   // Base/reset styles
import "./css/layout.css"; // Layout-related styles
import "./css/state.css";  // Component state styles (hover, active, etc)
import "./css/module.css"; // Modular/component styles

/**
 * Mount React application
 *
 * - Creates a React root on the DOM element with ID 'root'
 * - Wraps the application in <React.StrictMode> for development checks
 * - Renders the `TemplateMount`component, which dynamically determines
 *   which template component to display based on WordPress context
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemplateMount />
  </React.StrictMode>,
);
