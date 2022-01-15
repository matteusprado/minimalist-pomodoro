import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import Button from "./Button";
import Button from "./Button";

const calculateTimeLeft = (hour = 0, minute = 25) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate() + 1;
  let futureDate = new Date(year, month, day, 0, 0, 0);
  futureDate.setHours(futureDate.getHours() + hour);
  futureDate.setMinutes(futureDate.getMinutes() + minute);
  let difference = +futureDate - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <Text key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </Text>
    );
  });

  const onClick = (calculateTimeLeft, setTimeLeft) => {
    console.log("CLICK!");
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  };

  return (
    <View>
      <Card>
        {timerComponents.length ? timerComponents : <Text>Time's up!</Text>}
      </Card>
      <Card flexNumber={4}>
        <Button onPress={() => onClick(calculateTimeLeft, setTimeLeft)}>START</Button>
      </Card>
    </View>
  );
};

export default Timer;
