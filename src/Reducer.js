import {allChatsActive, allChatsArchive} from "./Components/chatListData"
const archiveData = {allChatsActive, allChatsArchive}
const stateHeader = {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    name: "Eleni Hobbs",
    isOnline: 'active',
};
const clientProfile = {
    shortName:"EH",
    email:"eleniH@gmail.com",
    name: "Eleni Hobbs",
    time: "13H",
    attended: "188",
    meetings: "119",
    rejected: "42",
    archived: false
};
export const chatReducer = (chats = [], action) => {
    switch(action.type) {
        case 'newChat' :
        console.log(action.payload.data);
        let chatData = JSON.parse(sessionStorage.chat);
        let index = chatData.findIndex(chat =>{
            return (Object.keys(chat)[0]) === action.payload.data
        });
        console.log(index);
        if(index > -1){
            chatData = chatData[index][action.payload.data]
            return chatData;
        }else{
            return [];
        }
        
        case 'sendMessage' :
            let totalChatData = JSON.parse(sessionStorage.chat);
            let indexOfChatData = totalChatData.findIndex(chat =>{
                return (Object.keys(chat)[0]) === action.payload.data.name
            });
            console.log(indexOfChatData);
            if(indexOfChatData > -1){
                totalChatData[indexOfChatData][action.payload.data.name].push(action.payload.data);
                sessionStorage.setItem('chat',JSON.stringify(totalChatData));
                return totalChatData[indexOfChatData][action.payload.data.name];
                
            }else{
                return chats
            }
            
        default :
            return chats;
    }
}

 export const chatHeaderReducer = (header = stateHeader, action) => {
    //alert('chatHeaderReducer');
    if(action.type === "newChatHeader"){
        //alert(action.payload.data.isOnline);
        return header = action.payload.data;
    }else{
        return header;
    }

}

export const clientReducer = (clientPro = clientProfile, action) =>{
    if(action.type ==="changeCPro"){
        console.log(action.payload.data)
        return clientPro = action.payload.data;
    }else{
        return clientPro;
    }
}

export const archiveReducer = (archive = archiveData, action) => {
    if(action.type==="setArchive"){
        console.log('Inside setArchive')
        console.log(action.payload.data);
        const index = archive.allChatsActive.findIndex(chats =>{
            return chats.name === action.payload.data;
        });
        if(index > -1){
            console.log(index);
            archive.allChatsActive[index].archived = true;
            archive.allChatsArchive.push(archive.allChatsActive[index]);
            archive.allChatsActive.splice(index,1);
            
        }
        return {allChatsActive, allChatsArchive};
    }else if(action.type === "unArchive"){
        console.log('Inside setUnArchive')
        const index = archive.allChatsArchive.findIndex(chats =>{
            return chats.name === action.payload.data;
        });
        console.log(index);
        if(index > -1){
            archive.allChatsArchive[index].archived = false;
            archive.allChatsActive.push(archive.allChatsArchive[index]);
            archive.allChatsArchive.splice(index,1);
        }
        return {allChatsActive, allChatsArchive};
    }
    else {
        return archive;
    } 

}

export const setUserActive = (state="active",action) => {
    console.log("Inside setUserActive")
    if(action.type === 'setActive'){
        state = 'active'
    }else if(action.type === 'setOffline'){
        state =  'offline'
    }
    return state;
}



