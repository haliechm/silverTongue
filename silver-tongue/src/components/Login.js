import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Login() {

  return (
    <Container
      style={{ backgroundColor: "white" }}
      className="no-padding bg-light"
      id="main"
      fluid
    >
      <Row className="no-margin" style={{height: '13%', display:'flex', alignItems:'center'}}>
        <Col className="float-left ml-3">
          <Link to="/"><i className="bi bi-x-lg float-left text-secondary"></i></Link>
        </Col>
      </Row>

      <Row className="no-margin mt-4">
        <Col
          xs={{ size: 8, offset: 2 }}
          md={{ size: 4, offset: 4 }}
          className="no-padding"
        >
          <Form>
            <FormText>
              <h2>Log In</h2>
            </FormText>
            <FormGroup row>
              <Col>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="email or username"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button className="main-page-button account-button">
                  LOG IN
                </Button>
              </Col>
            </FormGroup>

            <FormText color="muted">
              By signing into Wernix, you agree to our <Link>Terms</Link> and{" "}
              <Link>Privacy Policy</Link>.
            </FormText>

            <FormText color="muted">
              <hr />
              OR
            </FormText>

            <FormGroup row>
              <Col>
                <Button className="main-page-button sign-up-button mt-2">
                  CREATE AN ACCOUNT
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
