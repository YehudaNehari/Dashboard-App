import React from "react";
import Timer from "./timer";

export default function Page3() {
  return (
    <>
      <div>
        <Timer />
        <video width="100%" height="100%" preload="auto" autoPlay loop muted>
          <source src="video/wow.MP4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </>
  );
}
