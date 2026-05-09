function SingleComment(props) {
  return (
    <div className="border p-2 mb-2">
      <p className="mb-1">{props.comment.comment}</p>
      <small>Voto: {props.comment.rate}</small>
    </div>
  );
}

export default SingleComment;