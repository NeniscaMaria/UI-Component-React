import React, { Children, useState } from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = (props) => {
  const {
    accent,
    small,
    medium,
    large,
    disabled,
    children,
    className,
    critical,
    fill,
    icon,
    label,
    onClick,
    plain,
    primary,
    reverse,
    secondary,
    type,
    ...restProps
  } = props;

  const [mouseActive, setMouseActive] = useState(false);
  const [focus, setFocus] = useState(false);

  const buttonIcon = icon && <span className={"icon"}>{icon}</span>;
  const buttonLabel = label && <span className={"label"}>{label}</span>;

  const onMouseDown = (event) => {
    const { onMouseDown } = restProps;
    setMouseActive(true);
    if (onMouseDown) {
      onMouseDown(event);
    }
  };

  const onMouseUp = (event) => {
    const { onMouseUp } = restProps;
    setMouseActive(false);
    if (onMouseUp) {
      onMouseUp(event);
    }
  };

  const onFocus = (event) => {
    const { onFocus } = restProps;
    if (mouseActive === false) {
      setFocus(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };

  const onBlur = (event) => {
    const { onBlur } = restProps;
    setFocus(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const classes = classnames(
    "buttonContainer",
    {
      ["box"]: !plain,
      ["small"]: small,
      ["medium"]: medium,
      ["large"]: large,
      ["critical"]: critical,
      ["focus"]: focus,
      ["primary"]: primary,
      ["secondary"]: secondary,
      ["accent"]: accent,
      ["disabled"]: !onClick || disabled,
      ["fill"]: fill,
      ["plain"]: plain || Children.count(children) > 0 || (icon && !label),
    },
    className
  );

  const first = reverse ? buttonLabel : buttonIcon;
  const second = reverse ? buttonIcon : buttonLabel;

  return (
    <button
      {...props}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={!onClick || disabled}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {first}
      {second}
      {children}
    </button>
  );
};

Button.propTypes = {
  accent: PropTypes.bool,
  label: PropTypes.string || PropTypes.node,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  critical: PropTypes.bool,
  fill: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.array,
  plain: PropTypes.bool,
  primary: PropTypes.bool,
  reverse: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};

Button.defaultProps = {
  small: true,
  disabled: false,
};

export default Button;
