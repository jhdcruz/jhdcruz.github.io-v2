import React from "react";

export default function Button(props) {
  return (
    <a href={props.link} className="button is-outlined">
      <i className={props.icon} /> {props.name}
    </a>
  );
}
