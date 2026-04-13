/**
 * Single post Component
 *
 * Fetches and displays the current post from the WordPress REST API
 * Designed for use in a React-based WordPress theme.
 *
 * @return {JSX.Element} Rendered post.
 */

import { useState, useEffect } from "react";

function SinglePost() {
  const [postData, setPostData] = useState(null); // State to store fetched post
  const [loading, setLoading] = useState(true); // State to track loading status

  /**
   * useEffect hook runs once when the component mounts (empty dependency array [])
   * Responsible for fetching the post content from the REST API endpoint.
   */
  useEffect(() => {
    /** Fetch post by ID */
    fetch(
      rewactpress_data.API_endpoint +
        "posts/" +
        rewactpress_data.current_post_ID,
    )
      /** Parse JSON response */
      .then((response) => response.json())
      .then((data) => {
        /** Store retrieved post data in state */
        setPostData(data);

        /** Set loading state to false after data is fetched */
        setLoading(false);
      })
      .catch((err) => {
        /** If there are any errors, log them in the console */
        console.error("Error fetching post:", err);

        /**  Stop loading even if fetch fails */
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  /** Show a loading message while fetching data */
  if (loading) return <p>Loading...</p>;

  /** Show a message if no data was returned */
  if (!postData) return <p>It seems this page has no content. Woops...</p>;

  /**
   * Render the post content
   *
   * Displays the custom ACF page title if available, otherwise fallbacks to default WordPress title
   * Conditionally renders content if it exists using dangerouslySetInnerHTML.
   */
  return (
    <>
      <h1>{postData.acf?.page_title || postData.title.rendered}</h1>

      {postData.content?.rendered?.trim() && (
        <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
      )}
    </>
  );
}

export default SinglePost;
