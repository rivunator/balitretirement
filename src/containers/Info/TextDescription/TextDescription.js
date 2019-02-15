import React from "react";

const descriptionStyles = {
  margin: "30px 0px"
};

const hrStyles = {
  width: "30px",
  marginTop: "30px",
  backgroundColor: "#E2E2E2",
  height: "2px",
  border: "none"
};

const textDescription = () => (
  <div style={{ width: "80%", maxWidth: "1100px", margin: "auto" }}>
    <h2 style={{ marginBottom: "0" }}>It's easier thank you think!</h2>
    <span>Everything will be delivered online</span>
    <hr style={hrStyles} />
    <p style={descriptionStyles}>
      Bali is a beautiful place with a perfect climate offering gorgeous green
      views and paradise beaches. Every person deserves to spend their
      retirement here, but usually it’s the lack of information combined with
      complexity of paperwork and goverement requirements that make the move so
      difficult. However we are here to take care of all the difficult parts,
      you will get a retirement visa without even leaving your home!
    </p>
  </div>
);

export default textDescription;
