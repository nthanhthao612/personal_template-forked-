import PropTypes from "prop-types";

import "../../../styles/common/button.css";

function RoundedButton({
  display = "flex_horizontal",
  direction = "flex_center",
  size = "medium",
  image,
  text,
  action,
  color,
  backgroundColor,
}) {
  return (
    <div
      className={`button rounded-button ${size} ${display} ${direction} ${
        image && !text ? "circle" : "rect"
      }`}
      onClick={action}
      style={{ backgroundColor: backgroundColor }}
    >
      {image && <img src={image} alt="" />}
      {text && <p style={{ color: color }}>{text}</p>}
    </div>
  );
}

RoundedButton.propTypes = {
  size: PropTypes.string,
  display: PropTypes.string,
  image: PropTypes.string,
  direction: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default RoundedButton;
