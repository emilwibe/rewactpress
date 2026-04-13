/**
 * Widgets Component
 *
 * Fetches and renders the sidebar widgets from the WordPress REST API
 * Designed for use in a React-based WordPress theme.
 */

import { useEffect, useState } from "react";

const Widgets = () => {
  const [widgets, setWidgets] = useState([]); // State to store widgets retrieved from the REST API

  /**
   * useEffect hook runs once when the component mounts (empty dependency array [])
   * Responsible for fetching the sidebar widgets from the REST API endpoint.
   */
  useEffect(() => {
    /** Fetch widgets from WordPress REST API */
    fetch(
      `${window.rewactpress_data.site_url}/wp-json/react-widgets/v1/sidebar`,
    )
    /** Parse JSON response */
      .then((response) => response.json())

      /** Store retrieved widgets in state */
      .then((data) => setWidgets(data))

      /** If there are any errors, log them in the console */
      .catch((err) => console.error("Error fetching widgets:", err));
  }, []); // Empty dependency array ensures this runs only once on mount

  /**
   * Render the widgets
   *
   * - Maps through the widgets array and renders each widget inside a wrapper <div>
   * - Uses the widget ID as the key for React reconciliation
   * - Conditionally renders a <h2> title if it exists
   * - Conditionally renders widget content if it exists using dangerouslySetInnerHTML.
   */
  return (
    <div>
      {widgets.map((widget) => (
        <div key={widget.id} className="widget">
          {widget.title && <h2>{widget.title}</h2>}
          {widget.content && (
            <div
              className="widget-content"
              dangerouslySetInnerHTML={{ __html: widget.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Widgets;
