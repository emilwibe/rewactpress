import { useState, useEffect } from "react"

function SinglePost () {

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        fetch(rewactpress_data.API_endpoint + "posts/" + rewactpress_data.current_post_ID)
            .then((response) => response.json())
            .then(setPostData)
    }, []);

    if(!postData) return null;

    return (
        <>
            <h1>{postData.title.rendered}</h1>
            {
                console.log(postData)
            }
        </>
    )
}

export default SinglePost