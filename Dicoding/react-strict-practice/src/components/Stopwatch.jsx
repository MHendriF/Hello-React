import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ResetButton from "./ResetButton";
import { formatStopwatchFromMilliseconds } from "../utils";

function Stopwatch({ color }) {
  const [timeInMillis, setTimeInMillis] = useState(0);
  const [name, setName] = useState("");
  const firstRun = useRef(true);

  useEffect(() => {
    console.log("efek dijalankan");
    const intervalId = setInterval(() => {
      setTimeInMillis((prevValue) => prevValue + 100);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Now, we can make sure that the effect is only run once
    if (firstRun.current) {
      setName("Doe");
      firstRun.current = false;
      console.log("efek dijalankan", name);
    }
  }, []);

  const onReset = () => {
    setTimeInMillis(0);
  };

  return (
    <div className="stopwatch" style={{ color }}>
      <p className="stopwatch-time">
        {formatStopwatchFromMilliseconds(timeInMillis)}
      </p>
      <ResetButton reset={onReset} color={color} />
    </div>
  );
}

Stopwatch.defaultProps = {
  color: "#FFFFFF",
};

Stopwatch.propTypes = {
  color: PropTypes.string,
};

export default Stopwatch;
