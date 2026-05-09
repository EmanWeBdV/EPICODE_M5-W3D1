import { useState } from "react";

import Card from "react-bootstrap/Card";

import CommentArea from "./CommentArea";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={props.book.img}
          alt={props.book.title}
          style={{
            height: "300px",
            objectFit: "cover",
            border: selected ? "3px solid red" : "none",
            cursor: "pointer",
          }}
          onClick={() => setSelected(!selected)}
        />

        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>

      {selected && <CommentArea asin={props.book.asin} />}
    </div>
  );
}

export default SingleBook;