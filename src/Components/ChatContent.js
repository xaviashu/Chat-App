 import { useRef } from "react";
 import Avatar from "./Avatar";
 import ChatItem from "./ChatItem"
 import "./CSS/chatContent.css"
 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";
const ChatContent = () => {
    const messagesEndRef = useRef(null);
    const dispatch = useDispatch();
    const importData = () => {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
      input.click();
    }

    const chats = useSelector((state) => state.chatReducer);
    const chatHeader = useSelector((state) => state.chatHeaderReducer);
    console.log(chats);
    const sendMessage = () => {
      let message = messagesEndRef.current.value;
      if(message){
        let data = {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          type: "",
          key : chats?.length ? chats[chats.length-1].key + 1 : 1,
          msg : message
        }
        dispatch({
          type: 'sendMessage',
          payload :{
            data
          }
        });
        messagesEndRef.current.value = '';
        setTimeout(() =>{
          dispatch({
            type: 'sendMessage',
            payload :{
              data: {
                  image:chatHeader.image,
                  type: "other",
                  key : chats?.length ? chats[chats.length-1].key + 1 : 1,
                  msg : message
                }
            }
          })
        },2000)
      }
      
    }
    return (
        <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline ={chatHeader.active}
                image={chatHeader.image}
              />
              <p>{chatHeader.name}</p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {chats.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
          <button className="addFiles" onClick={importData} >
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={()=>{}}
              ref={messagesEndRef}
            />
            <button style={{marginRight: "5px"}}>
            <i class="fa fa-smile-o"></i>
              </button>
            <button className="btnSendMsg" id="sendMsgBtn" onClick= {sendMessage}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    )
}

export default ChatContent;

