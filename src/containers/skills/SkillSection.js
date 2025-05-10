import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Slide } from "react-awesome-reveal";
import FullStackImg from "./FullStackImg";
import WordPressImg from "./WordPressImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <WordPressImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;

  // Helper to render each skill sentence with styled prefix
  const renderSkillSentence = (sentence) => {
    const parts = sentence.split("–");
    if (parts.length > 1) {
      return (
        <>
          <span style={{ color: theme.text }}>{parts[0].trim()}</span>
          &nbsp;&ndash; {parts.slice(1).join("–").trim()}
        </>
      );
    }
    return sentence;
  };

  return (
    <div>
      {skills.data.map((skill, index) => {
        const content = (
          <div>
            <Slide
              triggerOnce
              direction={index % 2 === 0 ? "up" : "up"}
              duration={1000}
            >
              {skill.skills.map((skillSentence, idx) => (
                <p
                  key={idx}
                  className="subTitle skills-text"
                  style={{ color: theme.secondaryText }}
                >
                  {renderSkillSentence(skillSentence)}
                </p>
              ))}
            </Slide>
          </div>
        );

        return (
          <div key={index} className="skills-main-div">
            {index % 2 === 0 ? (
              <>
                <Slide triggerOnce duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Slide>
                <div className="skills-text-div">
                  <Slide triggerOnce direction="right" duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Slide>
                  <Slide triggerOnce direction="up" duration={1000}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Slide>
                  {content}
                </div>
              </>
            ) : (
              <>
                <div className="skills-text-div">
                  <Slide triggerOnce duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Slide>
                  <Slide triggerOnce left duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Slide>
                  {content}
                </div>
                <Slide triggerOnce direction="right" duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Slide>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;
