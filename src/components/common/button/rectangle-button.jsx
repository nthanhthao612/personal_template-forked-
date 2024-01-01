import PropTypes from "prop-types";

import "../../../styles/common/button.css";

function RectangleButton({
  display = "flex_horizontal",
  direction = "flex_center",
  size = "medium",
  image,
  text,
  action,
  color,
}) {
  return (
    <div
      className={`button rectangle-button ${size} ${display} ${direction} ${
        image && !text ? "square" : "rect"
      }`}
      onClick={action}
      style={{}}
    >
      {image && <img src={image} alt="" />}
      {text && <p style={{ color: color }}>{text}</p>}
    </div>
  );
}

RectangleButton.propTypes = {
  size: PropTypes.string,
  display: PropTypes.string,
  image: PropTypes.string,
  direction: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.string,
};

export default RectangleButton;
