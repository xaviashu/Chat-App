import Avatar from "./Avatar";
import "./ChatListItems"
import { useDispatch } from "react-redux";

const ChatListItems = (props) =>{
    const dispatch = useDispatch();
    const data = {
      image: props.image,
      isOnline: props.isOnline,
      name: props.name,
    }
    const proData = {
      name: props.name,
      shortName: props.shortName,
      email: props.email,
      time: props.time,
      attended: props.attended,
      meetings: props.meetings,
      rejected: props.rejected,
      archived: props.archived
    }
    const selectChat = () => {
      console.log(`In select chat data ${props.name}`);
      dispatch({
        type:'newChat',
        payload:{
          data:props.name
        }
       });
       dispatch({
        type: 'newChatHeader',
        payload:{
          data
        }
       });
       dispatch({
        type:'changeCPro',
        payload: {
          data: proData
        }
       })
    };
    return (
        <div
          // style={{ animationDelay: `0.${props.animationDelay}s` }}
          onClick={selectChat}
          className={`chatlist__item ${
            props.active ? props.active : ""
          } `}
        >
          <Avatar
            image={
              props.image ? props.image : "http://placehold.it/80x80"
            }
            isOnline={props.isOnline}
          />
  
          <div className="userMeta">
            <p>{props.name}</p>
            <span className="activeTime">32 mins ago</span>
          </div>
        </div>
      );
}
export default ChatListItems;