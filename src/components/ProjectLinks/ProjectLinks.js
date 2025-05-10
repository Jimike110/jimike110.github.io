import React from "react";
import "./ProjectLinks.css";
import { Tooltip } from "antd";

function ProjectLinks(props) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  console.log(props);
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
                  onClick={() => openRepoinNewTab(logo.url)}
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
                  onClick={() => openRepoinNewTab(logo.url)}
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

export default ProjectLinks;
