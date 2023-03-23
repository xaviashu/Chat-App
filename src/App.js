
import './App.css';
import ChatBody from "./Components/ChatBody"
//import {allChatsActive, allChatsArchive} from "./Components/chatListData"

function App() {
  sessionStorage.clear();
  sessionStorage.setItem('chat','[{"Hamaad Dejesus":[]},{"Eleni Hobbs":[]},{"Elsa Black":[]},{"Kayley Mellor":[]},{"Allen Woodley":[]},{"Manpreet David":[]}]');
  return (
    <div className="__main">
      <ChatBody />
    </div>
  );
}

export default App;
