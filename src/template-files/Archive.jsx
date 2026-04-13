/**
 * Archive Component
 *
 * Fetches and displays a list of posts from the WordPress REST API
 * Designed for use in a React-based WordPress theme.
 *
 * @returns {JSX.Element} Rendered list of posts
 */

import { useState, useEffect } from "react";

function Archive() {
  const [postData, setPostData] = useState([]); // State to store fetched posts
  const [loading, setLoading] = useState(true); // State to track loading status

  /**
   * useEffect hook runs once when the component mounts (Empty dependency array [])
   * Responsible for fetching posts from the REST API endpoint.
   */
  useEffect(() => {
    /** Fetch posts from the WordPress REST API */
    fetch(`${rewactpress_data.API_endpoint}posts`)
      /** Parse JSON response */
      .then((response) => response.json())
      .then((data) => {
        /** Store the retrieved posts in state */
        setPostData(data);

        /** Set loading state to false after data is fetched */
        setLoading(false);
      })
      .catch((err) => {
        /** If there are any errors, log them in the console */
        console.log("Error fetching posts:", err);

        /** Stop loading even if fetch fails */
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  /** Show a loading message while fetching data */
  if (loading) return <p>Loading...</p>;

  /** Show a message if no data was returned */
  if (!postData.length)
    return <p>It seems this page has no content. Woops...</p>;

  /**
   * Render the list of posts
   *
   * Maps and gives keys to each post corresponding to the unique ID in the WordPress REST API
   * Displays the custom ACF page title if available, otherwise fallbacks to default WordPress title
   * Conditionally renders content if it exists using dangerouslySetInnerHTML.
   */
  return (
    <>
      {postData.map((post) => (
        <article key={post.id}>
          <h2>{post.acf?.page_title || post.title.rendered}</h2>

          {post.content?.rendered?.trim() && (
            <section
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          )}
        </article>
      ))}
    </>
  );
}

export default Archive;
