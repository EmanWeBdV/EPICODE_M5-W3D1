import SingleComment from "./SingleComment";

function CommentsList(props) {
  return (
    <div>
      {props.comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;