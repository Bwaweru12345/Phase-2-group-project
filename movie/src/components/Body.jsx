import React from "react";

function Body(props) {
    return (
      <div>
        <img src="" alt={props.alt} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
  }

export default Body;