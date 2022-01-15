import React from "react";
import { StyleSheet, Text } from "react-native";
import Button from "./Button";

const StopWatch = ({ seconds }) => {
  return (
    <>
      
      <Text style={styles.countdown}>{`${Math.floor(seconds / 60)}:${(
        "00" +
        (seconds % 60)
      ).slice(-2)}`}</Text>
      

    </>
  );
};

const styles = StyleSheet.create({
  countdown: {
    color: "deepskyblue",
    fontWeight: "bold",
    fontSize: 70,
  },
});

export default StopWatch;
