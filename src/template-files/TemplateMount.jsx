import FrontPage from "./FrontPage";
import Archive from "./Archive";
import SinglePost from "./SinglePost";
import SinglePage from "./SinglePage";

function TemplateMount() {
  switch (rewactpress_data.template_type) {
    case "blog_page":
      return <Archive />;
      break;
    case "single":
      return <SinglePost />
      break;
    case "single_page":
      return <SinglePage />
      break;
    case "front_page":
      return <FrontPage />
      break;
    default:
      return (
        <>
          <h1>Hello World!</h1>
          <p>Template mount</p>
        </>
      ); 
  }
}

export default TemplateMount;
