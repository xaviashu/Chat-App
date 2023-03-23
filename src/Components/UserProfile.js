import "./CSS/userProfile.css"
import MenuItem from "@material-ui/core/MenuItem";
import {useState} from "react";
import Menu from "@material-ui/core/Menu";
import { useDispatch } from "react-redux";
const UserProfile = () =>{
  const dispatch = useDispatch();
  const [active,setActive] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const toogleClick = () =>{
    
    if(active){
      console.log('firing Inactive')
      dispatch({
        type: 'setOffline'
      })
    }else{
      console.log('firing active')
      dispatch({
        type: 'setActive'
      })
    }
    setActive(!active);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className="userProfile">
    <div style = {{display: "flex", alignItems: "center", marginLeft:"20px"}}>
      <button className= "btn-nobg" style={{color: "#4665ff"}}>
      <i class="fa fa-comments" aria-hidden="true"></i>
      </button>
      <h4>Quick Chat </h4>
      </div>
      <div className="userProfile-img">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"} alt="#" />
      </div>
      <h3>Ashutosh Tripathi</h3>
      <button onClick={handleClick} style={{marginLeft:"190px", top:"-41px",position:"relative", background:"transparent",border:"none"}}>
        <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
      </button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <h5>Lead UI/UX Designer</h5>
      {
      active ? <span>ACTIVE<button onClick={toogleClick} className= "btn-nobg" style={{color: 'green', marginLeft: "65px"}}>
      <i class="fa fa-toggle-on" aria-hidden="true"></i>
      </button></span> :
      <span>OFFLINE<button onClick={toogleClick} className= "btn-nobg" style={{color: 'grey',marginLeft: "65px"}}>
      <i class="fa fa-toggle-off" aria-hidden="true"></i>
      </button></span>
      }
      
    </div>
  );
}

export default UserProfile;