/* 左边导航栏组件 */
import React, { Component } from "react";
// import React, { Component } from 'react';
import logo from "../assets/logo.svg";
import test from "../assets/test.png";
import sys from "../assets/sys.png";

class Content extends Component {
  render() {
    const pathname = window.location.pathname;
    let imgSrc;
    let str;
    switch (pathname) {
      case "/app/content":
        imgSrc = logo;
        str = "/app/content";
        break;
      case "/app/test":
        imgSrc = test;
        str = "/app/test";
        break;
      case "/app/system":
        imgSrc = sys;
        str = "/app/test";
        break;
      default:
        break;
    }

    return (
      <div className="Body-header">
        <img src={imgSrc} className="Body-logo" alt="logo" />
            <p>{str}</p>
      </div>
    );
  }
}

export default Content;
