import React from "react";

function Card (props) {
    return (
      
      <div className="col" style={{height: 400}}>
          <img src={props.img} alt="pic"
          onClick={props.clickHandler}
          id={props.id}/>
          </div>
      
    )
    
}

export default Card