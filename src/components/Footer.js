import React from "react";
import { CDBModalFooter } from "cdbreact";
import { CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <CDBModalFooter>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "88%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <Link
            to="https://xcloudzyy.vercel.app/"
            target="_blank"
            className="d-flex align-items-center p-0 text-dark"
          >
            <img alt="logo" src="/avatar.svg" width="30px" />
            <span className="ms-2 h5 mb-0 font-weight-bold text-light">
              Cloudzy
            </span>
          </Link>
        </CDBBox>
        <CDBBox>
          <small className="ms-2">
            &copy; Cloudzy, {new Date().getFullYear()}. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <Link
              style={{ color: "white" }}
              to="https://www.linkedin.com/in/rossiamit"
              target="_blank"
            >
              <CDBIcon fab icon="linkedin" />
            </Link>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <Link
              to="https://x.com/xCloudzyyy"
              target="_blank"
              style={{ color: "white" }}
            >
              <CDBIcon fab icon="twitter" />
            </Link>
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <Link
              to="https://github.com/xcloudzy/react-exercise"
              style={{ color: "white" }}
              target="_blank"
            >
              <CDBIcon fab icon="github" />
            </Link>
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};
