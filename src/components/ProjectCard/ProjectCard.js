import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-awesome-reveal";
import { style } from "glamor";
import { Carousel, ConfigProvider, Image } from "antd";

export default function ProjectCard({ key, repo, theme }) {
  // function openRepoinNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const styles = style({
    backgroundColor: theme.projectCard,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    borderRadius: "12px",
    height: Math.max("100%", "400px"),
    transition: "all 0.3s ease-in-out",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: `${theme.imageDark} 0 4px 20px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={1000} distance="30px">
        <div {...styles} key={key}>
          {repo.images && (
            <div className="repo-images">
              {
                <ConfigProvider
                  theme={{
                    components: {
                      Carousel: {
                        arrowSize: 30,
                        arrowOffset: 30,
                      },
                    },
                  }}
                >
                  <Carousel
                    autoplay={{ dotDuration: true }}
                    autoplaySpeed={3000}
                    arrows
                  >
                    {repo.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={repo.name}
                      />
                    ))}
                  </Carousel>
                </ConfigProvider>
              }
            </div>
          )}
          <div className="repo-text">
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>

            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>

            <div className="flexDiv">
              <div className="repo-details Leftitem">
                <ProjectLanguages logos={repo.languages} />
              </div>
              <div className="repo-details Rightitem">
                <ProjectLinks logos={repo.links} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
