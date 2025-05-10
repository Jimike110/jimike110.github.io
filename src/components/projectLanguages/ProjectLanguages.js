import React from "react";
import "./ProjectLanguages.css";
import { Tooltip } from "antd";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {/* {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })} */}

          {props.logos.map((logo, index) => {
            return (
              <Tooltip key={index} title={logo.name}>
                <li
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
