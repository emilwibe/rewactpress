/**
 * TemplateMount Component
 *
 * Dynamically mounts the correct template component based on the current WordPress template type.
 * Designed for use in a React-based WordPress theme.
 *
 * @returns {JSX.Element} The React component corresponding to the current template type
 */

import FrontPage from "./FrontPage";
import Archive from "./Archive";
import SinglePost from "./SinglePost";
import SinglePage from "./SinglePage";

function TemplateMount() {
  /**
   * Switch based on the WordPress template type
   * Uses the global `rewactpress_data.template_type` to determine which component to render:
   * - "front_page" -> FrontPage
   * - "blog_page" -> Archive
   * - "single" -> SinglePost
   * - "single_page" -> SinglePage
   *
   * Falls back to a default placeholder if the template type does not match any known case.
   */
  switch (rewactpress_data.template_type) {
    case "blog_page":
      return <Archive />;
    case "single":
      return <SinglePost />;
    case "single_page":
      return <SinglePage />;
    case "front_page":
      return <FrontPage />;
    default:
      /**
       * Default placeholder
       * This should never render if get_template_type from enqueues is working correctly.
       */
      return (
        <>
          <h1>Hello World!</h1>
          <p>Template mount</p>
        </>
      );
  }
}

export default TemplateMount;
