import React from "react";

const button = props => {
  const styles = {
    padding: "12px 60px",
    borderRadius: "30px",
    fontSize: "14px",
    backgroundColor: props.color,
    border: "none",
    marginLeft: "10px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  };
  return <button style={styles}>{props.buttonText}</button>;
};

export default button;
