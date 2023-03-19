import {allChatsActive, allChatsArchive} from "./Components/chatListData"
const stateHeader = {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    name: "Eleni Hobbs",
    active: false,
    isOnline: false,
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
        return [];
        case 'sendMessage' :
            console.log(action.payload.data);
            return [...chats, action.payload.data];
            
        default :
            return chats;
    }
}

 export const chatHeaderReducer = (header = stateHeader, action) => {
    //alert('chatHeaderReducer');
    if(action.type === "newChatHeader"){
        console.log(action.payload.data);
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

export const archiveReducer = (archive = {allChatsActive, allChatsArchive}, action) => {
    if(action.type==="setArchive"){
        console.log(action.payload.data);
        const index = archive.allChatsActive.findIndex(chats =>{
            return chats.name === action.payload.data;
        });
        if(index !== -1){
            console.log(index);
            archive.allChatsActive[index].archived = true;
            archive.allChatsArchive.push(archive.allChatsActive[index]);
            console.log(archive.allChatsArchive);
            archive.allChatsActive = archive.allChatsActive.filter(chats =>{
                return chats.name !== action.payload.data;
            })
            console.log(archive.allChatsActive);
        }
        return archive
    }else if(action.type === "unArchive"){
        const index = archive.allChatsArchive.findIndex(chats =>{
            return chats.name === action.payload.data;
        });
        console.log(index);
        if(index!== -1){
            archive.allChatsArchive[index].archived = false;
            archive.allChatsActive.push(archive.allChatsArchive[index]);
            console.log(archive.allChatsActive);
            archive.allChatsArchive = archive.allChatsArchive.filter(chats=>{
                return chats.name !== action.payload.data;
            });
            console.log(archive.allChatsArchive);
        }
        return archive
    }
    else {
        return archive;
    } 

}



