import React from "react";

export const Contact = () => {
  return (
    <div>
      <div class="container-fluid  bg-opacity-50 text-dark mt-5">
        <div class="title">
          <span class="title-text ">Contact Me</span>
        </div>
        <div class="row">
          <div class="icons fw-bolder d-flex mt-5 flex-wrap g-5 justify-content-around">
            <a href="">
              {" "}
              <i class="fa-brands fa-facebook text-primary"></i>
            </a>
            <a href="">
              {" "}
              <i class="fa-brands fa-instagram text-danger"></i>
            </a>
            <i class="fa-brands fa-tiktok text-dark"></i>
            <i class="fa-solid fa-envelope text-success"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
