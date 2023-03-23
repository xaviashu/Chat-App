import Avatar from "./Avatar"
import ReactTimeAgo from 'react-time-ago'


const ChatItem = (props) => {
    console.log(props.user);
    return(
    <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${props.user ? props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{props.msg}</div>
          <div className="chat__meta">
            <span><ReactTimeAgo date={props.date} locale="en-US"/></span>
          </div>
        </div>
        <Avatar isOnline={props.isOnline} image={props.image} />
    </div>
    )
}
export default ChatItem;