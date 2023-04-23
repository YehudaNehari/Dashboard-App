import React, { useEffect, useState } from "react";

const After = () => {
  return <>done</>;
};

export default function Timer(props) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <React.Fragment>
      <div className="wrapper">
        {minutes === 0 && seconds === 0 ? (
          <div className="timer">
            <After />
            {(window.location = "/")}
          </div>
        ) : (
          <React.Fragment>
            <div className="timer">
              {seconds < 10 ? `0${seconds}` : seconds}
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
