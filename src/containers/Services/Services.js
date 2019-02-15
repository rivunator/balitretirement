import React from "react";
import ServiceItems from "../../components/UI/ServiceItems/ServiceItems";
import Button from "../../components/UI/Buttons/Button";

const services = () => {
  const styles = {
    padding: "60px 0px"
  };
  return (
    <div style={styles}>
      <ServiceItems>
        <h2>All incluse retirement visa service for 1990€</h2>
        <p>Average VISA processing time is about 1-2 months</p>
        <Button buttonText="More information" color="#BFEEFF" />
        <Button buttonText="Order now" color="#1BD57F" />
      </ServiceItems>
    </div>
  );
};

export default services;
