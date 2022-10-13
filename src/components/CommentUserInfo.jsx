
import "./CommentUserInfo.css"
function CommentUserInfo(props){
    return(
        <div className="UserInfo">
        <img
          className="Avatar"
          src={props.avatarUrl} alt="img"/>
          <div className="UserInfo-Name">{props.name}</div>
      </div>
    )
}
export default CommentUserInfo;