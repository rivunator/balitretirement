import React from "react";
import beach from "../../../assets/img/banner-img.jpg";

const bannerStyle = {
  width: "100%"
};

const banner = () => (
  <div>
    <img src={beach} alt="bali-retirement-beach" style={bannerStyle} />
  </div>
);

export default banner;
