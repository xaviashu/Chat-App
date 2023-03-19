
import ChatList from "./ChatList";
import ChatContent from "./ChatContent.js";
import ClientProfile from "./ClientProfile"
import "./CSS/chatBody.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import {chatReducer, chatHeaderReducer, clientReducer, archiveReducer} from "../Reducer";	
const ChatBody = () => {
    const reducer = combineReducers({
      chatReducer,
      chatHeaderReducer,
      clientReducer,
      archiveReducer
    })
    const store = createStore(reducer);
    return (
        <div className="main__chatbody">
          <Provider store={store}>
          <ChatList />
          <ChatContent />
          <ClientProfile/>
          </Provider>
        </div>
      );
}
export default ChatBody;