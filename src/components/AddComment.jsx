import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddComment(props) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");

  const sendComment = () => {
    const newComment = {
      comment: comment,
      rate: rate,
      elementId: props.asin,
    };

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "SITO NON DISPONIBILE PER RICHIEDERE IL TOKEN",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione inviata!");
        } else {
          alert("Errore invio recensione");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-3">
      <Form>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Scrivi recensione"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Select
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>

        <Button onClick={sendComment}>
          Invia
        </Button>
      </Form>
    </div>
  );
}

export default AddComment;