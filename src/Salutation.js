import React from "react";

export default function Salutation(props) {
  if (props.data.city) {
  return <div className="salutation"><h1>Well, hello there {props.data.city}!</h1></div>;
  } else {
  return <h1>Well, hello there!</h1>;
  }
}
