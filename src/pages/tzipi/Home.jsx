import React, { useState } from "react";
import { Button } from "@mui/material";
import "./home.css";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";

const Home = () => {
  const [state, setState] = useState("0");

  return (
    <div className="home">
      {state == 0 ? (
        <>
          <div className="main">
            <h1 style={{ textAlign: "center" }}> כאן אין פחד קהל! </h1>

            <div className="btn">
              <Button variant="contained" onClick={() => setState("1")}>
                שלב 1
              </Button>
              <Button variant="contained" onClick={() => setState("2")}>
                שלב 2
              </Button>
              <Button variant="contained" onClick={() => setState("3")}>
                שלב 3
              </Button>
              <Button variant="contained" onClick={() => setState("4")}>
                שלב 4
              </Button>
              <Button variant="contained" onClick={() => setState("5")}>
                שלב 5
              </Button>
            </div>
          </div>

          <video width="100%" height="100%" preload="auto" autoPlay loop muted>
            <source src="video/iframe.MP4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </>
      ) : state == "1" ? (
        <Page1 />
      ) : state == "2" ? (
        <Page2 />
      ) : state == "3" ? (
        <Page3 />
      ) : state == "4" ? (
        <Page4 />
      ) : (
        state == "5" && <Page5 />
      )}
    </div>
  );
};

export default Home;
