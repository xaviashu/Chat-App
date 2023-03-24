 import { useRef, useState } from "react";
 import Avatar from "./Avatar";
 import EmojiPicker from 'emoji-picker-react';
 import ChatItem from "./ChatItem"
 import "./CSS/chatContent.css"
 import { useSelector } from "react-redux";
 import { useDispatch } from "react-redux";
const ChatContent = () => {
    const messagesEndRef = useRef(null);
    const [toggleEmoji, setToggleEmoji] = useState(false);
    const dispatch = useDispatch();
    const userActive = useSelector((state) => state.setUserActive)
    const showEmojiMenu = () =>{
      setToggleEmoji(!toggleEmoji);
    }
    const onClickEmoji = (emojiData) =>{
      console.log(emojiData);
      messagesEndRef.current.value = messagesEndRef.current.value + emojiData.emoji;
    }
    const importData = () => {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            
            messagesEndRef.current.value = files[0].name;
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
          msg : message,
          name: chatHeader.name,
          date : new Date()
        }
        dispatch({
          type: 'sendMessage',
          payload :{
            data
          }
        });
        messagesEndRef.current.value = '';
        setTimeout(() =>{
          console.log(chats?.length ? chats[chats.length-1].key + 1 : 1);
          dispatch({
            type: 'sendMessage',
            payload :{
              data: {
                  image:chatHeader.image,
                  type: "other",
                  key : chats?.length ? `${chats[chats.length-1].key + 1} Other` : "1 Other",
                  msg : message,
                  name: chatHeader.name,
                  date : new Date()
                }
            }
          })
        },2000);
      }
      
    }
    return (
        <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline ={chatHeader.isOnline}
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
                  date = {itm.date}
                  isOnline = {itm.type ? chatHeader.isOnline: userActive}
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
            <button style={{marginRight: "5px"}} onClick= {showEmojiMenu}>
            <i class="fa fa-smile-o"></i>
              </button>
              
            <button className="btnSendMsg" id="sendMsgBtn" onClick= {sendMessage}>
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
          <div style={{    left: "319px",position: "relative"}}>
                {
                  toggleEmoji && <EmojiPicker onEmojiClick={onClickEmoji}/>
                }
              </div>
        </div>
      </div>
    )
}

export default ChatContent;

