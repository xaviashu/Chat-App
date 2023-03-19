import { Avatar} from '@mui/material';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./CSS/ClientProfile.css"
const ClientProfile = () =>{
    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.clientReducer);
    const onArchiveClick = () =>{
        if(!profileData.archived){
            
            dispatch({
                type:"setArchive",
                payload:{
                    data:profileData.name
                }
            })
        }else if(profileData.archived){
            console.log("Inside unArchive ")
            dispatch({
                type:"unArchive",
                payload:{
                    data:profileData.name
                }
            })
        }
        
    }
    return(
        <div>
            
            <Avatar sx={{ bgcolor: "blue" , marginLeft: "120px"}}>{profileData.shortName}</Avatar>
            <button style={{ marginLeft: "50px", marginTop: "10px"}}>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </button>
            <span style = {{marginLeft: "5px"}}>{profileData.email}</span><br></br>
            <button style={{ marginLeft: "50px", marginTop: "10px"}}>
            <i class="fa fa-user" aria-hidden="true"></i>
            </button>
            <span style = {{marginLeft: "5px"}}>{profileData.name}</span><br></br>
            {   profileData.archived ?
                <button style={{ marginLeft: "105px", marginTop: "10px"}} onClick={onArchiveClick}>Un Archive
                <i style={{marginLeft:"5px"}} class="fa fa-archive" aria-hidden="true"></i>
                </button> :
                <button style={{ marginLeft: "105px", marginTop: "10px"}} onClick={onArchiveClick}>Archive
                <i style={{marginLeft:"5px"}} class="fa fa-archive" aria-hidden="true"></i>
                </button>
            }
            
            <div id="container">
                <div class="top left topleft">
                    <button className = "btn-nobg" style={{color:"blue"}}>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    </button>
                    <span className = "font">{profileData.time}</span><br></br>
                    <span style ={{fontSize: "smaller",marginLeft: "40px"}}>Time</span>
                </div>
                <div class="top right topright">
                <button className = "btn-nobg" style={{color:"green"}}>
                <i class="fa fa-users" aria-hidden="true"></i>
                    </button>
                    <span className = "font">{profileData.attended}</span><br></br>
                    <span style ={{fontSize: "smaller",marginLeft: "40px"}}>Attended</span>
                </div>
                <div class="bottom left bottomleft">
                <button className = "btn-nobg" style={{color:"purple"}}>
                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                    </button>
                    <span className = "font">{profileData.meetings}</span><br></br>
                    <span style ={{fontSize: "smaller",marginLeft: "40px"}}>Meetings</span>
                </div>
                <div class="bottom right bottomright">
                    <button className = "btn-nobg" style={{color:"orange"}}>
                        <i class="fa fa-ban" aria-hidden="true"></i>
                    </button>
                    <span className = "font">{profileData.rejected}</span><br></br>
                    <span style ={{fontSize: "smaller",marginLeft: "40px"}}>Rejected</span>
                </div>
            </div>
            <div id="container" style={{top:"20px", background:"aliceblue"}}>
                <button className = "btn-nobg" style={{color:"blue", marginLeft:"80px", marginTop: "-30px", rotate: "25deg"}}>
                <i class="fa fa-paper-plane fa-3x" aria-hidden="true"></i>
                </button>
                <h5 style={{marginLeft: "70px"}}>Onboard Clients</h5><br></br>
                <p style={{marginTop:"-38px", marginLeft: "5px",fontSize:"smaller"}}>Share the link with prospectus and discuss all stuff</p>
                <button  style={{background:"blue",color:"white",border:"1px solid blue",borderRadius:"3px", marginLeft:"5px", marginLeft:"70px"}}>Copy Link
                <i style={{marginLeft:"5px"}} class="fa fa-link" aria-hidden="true"></i>
                </button>
            </div>
            
        </div>
        
    );
}

export default ClientProfile;