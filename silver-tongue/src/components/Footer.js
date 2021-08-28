import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter className="page-footer font-small pt-4 mt-4 bg-dark">
      {/* <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div> */}
      <MDBContainer fluid className="text-center text-md-left">
        <div className="text-center py-3">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h4>Practice speaking in other langauges today!</h4>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-danger btn-rounded">
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <MDBRow>
          <MDBCol md="6">
            <h5 className="mb-4 mt-3 font-weight-bold">
              WERNIX &copy; 2021 wernix area
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3 klj kl lkj kl</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1 kj k jkjjkj lkkj</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPagePro;
