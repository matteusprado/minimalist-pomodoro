import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Card = ({ label, children, flexNumber, bgColor }) => (
  <View style={[styles.container, {flex: flexNumber || 1}]}>
    <View style={[styles.box, {backgroundColor: bgColor || 'aliceblue'}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    minWidth: "100%",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    minWidth: 50,
    flex: 1,
    flexDirection: "row",
  },
});

export default Card;
