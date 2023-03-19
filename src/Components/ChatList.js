import { useEffect, useState } from "react";
import ChatListItems from "./ChatListItems";
import UserProfile from "./UserProfile";
import "./CSS/chatList.css";
import { useSelector } from "react-redux";
//import {allChatsActive, allChatsArchive} from "./chatListData"

const ChatList = () =>{
    const ashu = useSelector(state=>state.archiveReducer);
    const {allChatsActive, allChatsArchive} = ashu;
    console.log(ashu);
    //console.log(allChatsArchive);
    const[toggleActiveChat, setToggleActiveChat] = useState(true);
    const[toggleAcrchiveChat, setToggleArchiveChat] = useState(false);

    const toogleActive = ()=>{
      setToggleActiveChat(!toggleActiveChat);
      setToggleArchiveChat(!toggleAcrchiveChat);
    }

    const toggleArchive = ()=>{
      setToggleArchiveChat(!toggleAcrchiveChat);
      setToggleActiveChat(!toggleActiveChat);
    }
    return (
        <div><UserProfile/>
        <div className="main__chatlist">
          
          <div className="chatlist__heading">
            <h3>Active Chats</h3>
            <button className = "btn-nobg" onClick={toogleActive} style={{color: 'black'}}>
            {toggleActiveChat ?
              <i class="fa fa-sort-asc" aria-hidden="true"></i> :
              <i class="fa fa-sort-desc" aria-hidden="true"></i>
            }
            </button>
          </div>
          <div className="chatlist__items">
            { 
            toggleActiveChat &&
            allChatsActive.map((item, index) => {
                return (
                  <ChatListItems
                    name={item.name}
                    key={item.id}
                    animationDelay={index + 1}
                    active={item.active ? "active" : ""}
                    isOnline={item.isOnline ? "active" : ""}
                    image={item.image}
                    shortName={item.shortName}
                    email={item.email}
                    time= {item.time}
                    attended= {item.attended}
                    meetings= {item.meetings}
                    rejected= {item.rejected}
                    archived = {item.archived}
                  />
                );
              })
            }
          </div>
          <div className="chatlist__heading">
            <h3>Archive Chats</h3>
            <button className = "btn-nobg" onClick={toggleArchive} style={{color: 'black'}}>
            {toggleAcrchiveChat ? 
              <i class="fa fa-sort-asc" aria-hidden="true"></i> :
              <i class="fa fa-sort-desc" aria-hidden="true"></i>
            }
            </button>
          </div>
          <div className="chatlist__items">
            {
            toggleAcrchiveChat &&
            allChatsArchive.map((item, index) => {
                return (
                  <ChatListItems
                    name={item.name}
                    key={item.id}
                    animationDelay={index + 1}
                    active={item.active ? "active" : ""}
                    isOnline={item.isOnline ? "active" : ""}
                    image={item.image}
                    shortName={item.shortName}
                    email={item.email}
                    time= {item.time}
                    attended= {item.attended}
                    meetings= {item.meetings}
                    rejected= {item.rejected}
                    archived = {item.archived}
                  />
                );
              })
            }
          </div>
        </div></div>
        );
}

export default ChatList;