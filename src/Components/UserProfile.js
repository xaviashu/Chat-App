import "./CSS/userProfile.css"
const UserProfile = () =>{
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
      <h5>Lead UI/UX Designer</h5>
      <span>Active<button className= "btn-nobg" style={{color: 'green'}}>
      <i class="fa fa-circle" aria-hidden="true"></i>
      </button></span>
    </div>
  );
}

export default UserProfile;