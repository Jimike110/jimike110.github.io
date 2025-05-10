import React from "react";
import "./SoftwareSkill.css";
import { Tooltip } from "antd";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo, index) => {
            return (
              <Tooltip key={index} title={logo.skillName} id={`tooltip-top`}>
                <li className="software-skill-inline" name={logo.skillName}>
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
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

export default SoftwareSkill;
