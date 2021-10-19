import React from "react";

const Name = ({ name, surname, handleClick }) => <div onClick={handleClick}>{name} {surname}</div>

export default Name;