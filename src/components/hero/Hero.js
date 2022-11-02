import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Select the largest selection of luxury high-rise apartments,
          multi-family homes and luxury homes.{" "}
        </p>
        <form action="" className="search">
          <div>
            <input type="text" placeholder="Enter Keyword..." name="" id="" />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
