import { useEffect, useState } from "react";

import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

function CommentArea(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/books/" +
        props.asin +
        "/comments/"
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.asin]);

  return (
    <div className="mt-3 p-2 bg-light">
      <h5>Recensioni</h5>

      <CommentsList comments={comments} />

      <AddComment asin={props.asin} />
    </div>
  );
}

export default CommentArea;