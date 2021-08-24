import React, { Fragment } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { NavBarMain } from "./";
import { logo_gray_people } from "../images";
import _ from "lodash";
import { slideOutRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { data } from "../util";
import {Link} from 'react-router-dom';

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
    return wordsToReturn;
  }

  function createLanguageWordFlyIn(word) {
    styles.slideOutRight.top = `${_.random(10, 90)}%`;
    styles.slideOutRight.animation = `x ${_.random(8, 25)}s linear infinite`;

    return (
      <p style={{ ...styles.slideOutRight }} className="language-word-fly-in">
        {word}
      </p>
    );
  }
  return (
    <StyleRoot>
      <Container id="main" className="no-padding" fluid>
        <NavBarMain />
        <Row id="main-page-background" className="no-margin bg-light">
          {createFlyInAnimation()}
          <Col md="5" className="no-padding">
            <div>
              <img
                src={logo_gray_people}
                alt="speech bubbles logo"
                width="350"
                height="350"
              ></img>
            </div>
          </Col>
          <Col md="6" className="no-padding" id="main-page-content">
            <Row className="no-margin mb-4">
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
                <Link to="login"><Button className="main-page-button account-button">
                  I ALREADY HAVE AN ACCOUNT
                </Button></Link>
              </Col>
              <Col className="no-padding"></Col>
            </Row>
          </Col>
          <Col className="no-padding"></Col>
        </Row>
        <div id="language-carousel"></div>
      </Container>
    </StyleRoot>
  );
}
