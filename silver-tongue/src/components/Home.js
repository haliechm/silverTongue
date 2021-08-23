import React, { Fragment } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { NavBarMain } from "./";
import { medium_logo, medium_logo_green, medium_logo_people } from "../images";
import _ from "lodash";
import { zoomOutRight, bounceInDown, slideOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium"; // this is required only to work with the animations library :(
import { data } from "../util";

const styles = {
  slideOutRight: {
    animation: "x 18s linear infinite",
    animationName: Radium.keyframes(slideOutRight, "slideOutRight"),
    top: 0,
  },
};

export default function Home(props) {
  function createFlyInAnimation() {
    let wordsToReturn = _.map(data.languageTranslationsArray, (word) =>
      createLanguageWordFlyIn(word)
    );
    console.log("here", wordsToReturn);
    return wordsToReturn;
  }

  function createLanguageWordFlyIn(word) {
    // console.log(word);
    var rand = _.random(10, 100);
    // styles.slideOutRight.top = `${_.random(10,90)}%`;
    styles.slideOutRight.top = `${rand}%`;

    var rand2 = _.random(8, 25);
    // styles.slideOutRight.animation = `x ${rand2}s linear infinite`;
    styles.slideOutRight.animation = `x ${rand2}s linear infinite`;
    console.log(rand2);
    console.log("rand is: ", rand);

    // var rand3 = _.random(0, 20);
    // styles.slideOutRight.left = `${rand3}%`;
    return (
      //   <p style={styles.slideOutRight} className="language-word-fly-in">
      //     {word}
      //   </p>
      <p style={{ ...styles.slideOutRight }} className="language-word-fly-in">
        {word}
      </p>
    );
  }
  return (
    <StyleRoot>
      <Container id="main" className="no-padding" fluid>
        <NavBarMain />
        <Row id="main-page-background" className="no-margin">
          {/* <p style={styles.slideOutRight} className="language-word-fly-in">
            plz
          </p> */}
          {createFlyInAnimation()}
          <Col md="5" className="no-padding">
            <div id="logo-speech-bubbles">
              {/* <img
                src={medium_logo}
                alt="speech bubbles logo"
                width="400"
                height="400"
              ></img> */}
              <img
                src={medium_logo_people}
                alt="speech bubbles logo"
                width="350"
                height="350"
              ></img>
            </div>
          </Col>
          <Col md="6" className="no-padding" id="main-page-content">
            <Row className="no-margin">
              <Col className="no-padding">
                <p>
                  Improve your language skills through direct communication with
                  other language learners
                </p>
              </Col>
            </Row>
            <Row className="no-margin">
              <Col className="no-padding"></Col>
              <Col md="6" className="no-padding">
                <Button className="main-page-button sign-up-button">
                  SIGN UP
                </Button>
              </Col>
              <Col className="no-padding"></Col>
            </Row>
            <Row className="no-margin">
              <Col className="no-padding"></Col>
              <Col md="6" className="no-padding">
                <Button className="main-page-button account-button">
                  I ALREADY HAVE AN ACCOUNT
                </Button>
              </Col>
              <Col className="no-padding"></Col>
            </Row>
          </Col>
          <Col className="no-padding"></Col>

          {/* language words flying in animation */}
          {/* <div id="language-carousel"></div> */}
          {/* <Row className="no-margin" id="language-carousel"></Row> */}
        </Row>
        <div id="language-carousel"></div>
      </Container>
    </StyleRoot>
  );
}
