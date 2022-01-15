import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import Button from "./Button";
import StopWatch from "./StopWatch";

const Timer = () => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [pristine, setPristine] = useState(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const int = setInterval(() => {
      //   console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setSeconds((s) => {
          if (s > 0) {
            return s - 1;
          }
          setPaused(true);
          setPristine(true);

          return 0;
        });
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [paused]);
  function startTimer() {
    setPristine(false);
    setPaused(false);
  }
  function pauseTimer() {
    setPaused(true);
  }
  function resetTimer() {
    setPristine(true);

    setPaused(true);
    setSeconds(25 * 60);
  }
  function addMinute() {
    setPaused(true);

    setSeconds((s) => s < 60 * 60 ? s + 5 * 60 : s);
  }

  function subtractMinute() {
    setPaused(true);
    setSeconds((s) => (s > 5 * 60 ? s - 5 * 60 : s));
  }
  const ShowText = () => {
    console.log("seconds", seconds);
    console.log("pristine", pristine);
    if (seconds === 0 && pristine === true) {
      return (
        <>
          <Text
            style={{ color: "orange", fontWeight: "bold", fontSize: 40 }}
          >
            Times up! 🥫
          </Text>
        </>
      );
    }
    return null;
  };

  return (
    <View>
      <Card flexNumber={2}>
        <Button bgColor="deepskyblue" onPress={subtractMinute}>
          -
        </Button>
        <StopWatch seconds={seconds} />
        <Button bgColor="deepskyblue" onPress={addMinute}>
          +
        </Button>
      </Card>
      <Card flexNumber={2}>
        <ShowText />
      </Card>
      <Card flexNumber={3}>
        <Button
          bgColor="mediumturquoise"
          onPress={paused ? startTimer : pauseTimer}
        >
          {paused ? "Start" : "Pause"}
        </Button>

        <Button bgColor="orangered" onPress={resetTimer}>
          Reset
        </Button>
      </Card>
    </View>
  );
};

export default Timer;
