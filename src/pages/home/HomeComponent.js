import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router";
import { style } from "glamor";
import { Flex } from "antd";

function Home(props) {
  const navigate = useNavigate();
  const theme = props.theme;
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Flex justify="center" align="center">
        <button
          {...styles}
          className="button"
          onClick={() => {
            window.scrollTo({ top: 0 });
            navigate("/contact");
          }}
        >
          Contact & Resume
        </button>
      </Flex>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
