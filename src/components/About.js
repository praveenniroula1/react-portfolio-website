import React from "react";
import about from "../img/About.png";

export const About = () => {
  return (
    <div>
      <div class="container about mt-5 py-5">
        <div class="title">
          <span class="title-text ">About Me</span>
        </div>
        <div class="row ">
          <div class="col text-center order-md-2 ">
            {" "}
            <img class="imggg " src={about} alt=""></img>
            <div class="col-md " />
            Hi👋,
            <div class="fs-2 fw-bolder ">Praveen Niroula</div>
            <p>
              I am software engineer based in sydney. My background is Business
              and Tech.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse
            debitis corporis autem illum ducimus impedit voluptate quidem
            delectus eligendi! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Beatae laudantium nobis corporis pariatur
            perferendis! Optio quisquam quis suscipit iure deserunt? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ab esse debitis
            corporis autem illum ducimus impedit voluptate quidem delectus
            eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Beatae laudantium nobis corporis pariatur perferendis! Optio
            quisquam quis suscipit iure deserunt?
          </div>
        </div>
      </div>
    </div>
  );
};
