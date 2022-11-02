import React from "react";
import "./Featured.css";
import House1 from "../../assets/house1.jpg";
import Bed1 from "../../assets/bed1.jpg";
import Bed2 from "../../assets/bed2.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Bath1 from "../../assets/bath1.jpg";

import House2 from "../../assets/house2.jpg";
import Bed3 from "../../assets/bed3.jpg";
import Bed4 from "../../assets/bed4.jpg";
import LivingRoom from "../../assets/living-room.jpg";
import Bath2 from "../../assets/bath2.jpg";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-text">Featured Listings</h1>
      <p className="featured-text">
        Selected listings by City, State & Zip based on views
      </p>
      <div className="container">
        <img className="span3 image-grid-row-2" src={House1} alt="" />
        <img src={Bed1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bath1} alt="" />
        <div className="span3 img-details">
          <div className="top">
            <h2>124 Avenue Lamine Gueye, Dakar</h2>
            <p>House for Sale</p>
            <p className="price">$3,845,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">Est payment:</p>
                <p>14,797/month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span2 right-img-details">
          <p>A beautiful modern day home in the city with a full-size pool</p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      {/*section*/}
      <div className="container">
        <img className="order-2" src={Bed3} alt="" />
        <img className="order-3" src={Bed4} alt="" />
        <img className="span3 image-grid-row-2 order-1" src={House2} alt="" />
        <img className="order-4" src={Bath2} alt="" />
        <img className="order-5" src={LivingRoom} alt="" />
        <div className="span2 right-img-details order-7">
          <p>A beautiful modern day home in the city with a full-size pool</p>
          <button className="btn">View Listing</button>
        </div>
        <div className="span3 img-details order-6">
          <div className="top">
            <h2>124 Avenue Lamine Gueye, Dakar</h2>
            <p>House for Sale</p>
            <p className="price">$3,845,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">Est payment:</p>
                <p>14,797/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
