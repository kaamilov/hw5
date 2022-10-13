import "./CommentWrapper.css"

function CommentWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}
export default CommentWrapper;
