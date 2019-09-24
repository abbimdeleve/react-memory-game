import React from "react";

function Header () {
    return (
    <div className ="jumbotron" style={{background: "teal"}}>
  <h1 className="display-4" style={{fontFamily: "georgia", color: "blanchedalmond"}}>Memory Game</h1>
  <p className="lead"></p>
  <hr className="my-4"/>
  <h3 style={{fontFamily: "courier", fontWeight: "bold", color: "blanchedalmond"}}>Click each magnificent horse on the screen JUST ONCE to win the game: pictures are sorted after each click!</h3>
  <p style={{fontFamily: "courier", color: "blanchedalmond", textAlign: "right"}}>Are you a horse girl or are you a horse girl?</p>
   </div>
   )
}
export default Header