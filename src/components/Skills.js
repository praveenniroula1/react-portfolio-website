import React from "react";

export const Skills = () => {
  return (
    <div>
      <div class=" container">
        <div class="row">
          <div class="col">
            <div class="title text-center mt-5 pt-5">
              <span class="title-text ">SKILLS</span>
            </div>

            <div class="icons fw-bolder d-flex mt-5 flex-wrap g-5 justify-content-around">
              <div>
                <i class="fa-brands fa-html5 text-danger"></i>HTML5
              </div>
              <div>
                {" "}
                <i class="fa-brands fa-html5 text-primary"></i>CSS3
              </div>
              <div>
                {" "}
                <i class="fa-brands fa-js text-warning"></i>JAVASCRIPT
              </div>
              <div>
                <i class="fa-brands fa-figma text-danger"></i>FIGMA
              </div>
              <div>
                <i class="fa-brands fa-github"></i>GITHUB
              </div>
              <div>
                <i class="fa-brands fa-bootstrap text-primary"></i>BOOTSTRAP
              </div>
              <div>
                <i class="fa-brands fa-react text-info"></i>React
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
