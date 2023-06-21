import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

function Button(props) {
  const { title, iconName, onClick } = props;
  return (
    <button type="submit" className="main-button" onClick={onClick}>
      {title}
      {iconName && <FontAwesomeIcon icon={iconName} className="button-icon" />}
    </button>
  );
}

export default Button;
