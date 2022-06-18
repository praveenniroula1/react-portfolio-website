import React from "react";
import photo from "../img/photo.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container mt-5">
        <div className="row bg-opacity-50">
          <div className="col-md-5 text-center">
            <img className="img" src={photo} width="60%" alt="" />
          </div>

          <div className="write col-md-7 text-center mt-5">
            Hi👋,
            <div className="fs-2 fw-bolder">Praveen Niroula</div>
            <p>
              I am software engineer based in sydney. My background is Business
              and Technology. I'm currently enrolled in Applied Blockchain
              Technology as well. <br /> Basically, I am trying to combine the
              business world with the technology by acquiring the skills.{" "}
            </p>
            <button type="button" className="btn btn-outline-danger">
              Download Resume{" "}
              <i className="fa-solid fa-download text-dark bg-warning"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
