import React from "react";
import { useParams } from "react-router-dom";

const Details = ({name}) => {
  const selected = useParams();
  
  return(
      <button type="button" onClick={() => console.log(selected)}>log</button>
  )
}

export default Details;

