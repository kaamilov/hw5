import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment(props) {
  return (
    <div>
       <div className="Comment">
      <CommentUserInfo 
      avatarUrl={props.data.author.avatarUrl} 
      name= {props.data.author.name}/>



      <div className="Commet-text">{props.data.text}</div>
      <CommentDate date={props.data.date}/>
      {/* <div className="Commet-date">{formatDate(props.data.date)}</div> */}
    </div>


    <CommentWrapper>
     



      <div className="Commet-text">{props.data.text}</div>
      <CommentDate date={props.data.date}/>
      {/* <div className="Commet-date">{formatDate(props.data.date)}</div> */}
    </CommentWrapper>
    </div>
   
  );
}
export default Comment;
