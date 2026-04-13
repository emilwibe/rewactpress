/**
 * Widget Loader
 *
 * This file is responsible for mounting the React widgets into a specified DOM element.
 * Designed for use in a React-based WordPress theme.
 */

import Widgets from "../template-files/Widgets";
import { createRoot } from "react-dom/client";

/** Holds the React root to avoid multiple re-mounts */
let root;

/**
 * Global function `renderMyWidget`
 * Exposes a method on the `window` object that allows PHP/WordPress to
 * render the React widget dynamically, passing props as needed.
 *
 * @param {object} props - Optional props to pass to the widget component
 */

window.renderMyWidget = (props = {}) => {
  /** If the root hasn't been created yet, create it on the #root element */
  if (!root) {
    root = createRoot(document.getElementById("root"));
  }

  /**  Render the widget component into the root, spreading any props */
  root.render(<Widgets {...props} />);
};
