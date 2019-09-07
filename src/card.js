import React, { Component } from "react";

const Card = ({ id, name, email }) => {
  
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <img alt="Robo pic" src={`https://robohash.org/${id}?150x200`} />
      <div>
        <h1 className="underline">{name}</h1>
        <p>{email} </p>
      </div>
    </div>
  );
};

export default Card;
