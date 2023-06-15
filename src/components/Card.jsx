import React, { useState } from "react";

function Card({ hog }) {
  const [disply, setDisply] = useState("disply");

  function handleClickDisply(){
    if(disply === ""){
      setDisply("disply")
    }else{
      setDisply('')
    }
  }
  return (
    <div onClick={handleClickDisply} className="ui grid container">
      <div className="ui eightwide column">
        <div className="ui card">
          <div className="image">
            <img src={hog.image} />
          </div>
          <div className="content">
            <h1 className="pigTile">{hog.name}</h1>
          </div>
          <div class={`description ${disply}`}>
            <p>specialty: {hog.specialty}</p>
            <p>weight: {hog.weight}</p>
            <p>greased: {hog.greased ? "Yse" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
