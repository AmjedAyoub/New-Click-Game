import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
       <div className="img-container">
         <img  onClick={() => props.handleClick(props.id)} className="imgPick" src={props.image} data-id={props.id}/>
       </div>
     </div>
  );
}
export default FriendCard;