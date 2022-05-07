import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  const { onClick, label } = props;

  return <div onClick={onClick}> {label} </div>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
