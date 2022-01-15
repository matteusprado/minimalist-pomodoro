import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Timer from "./components/Timer";
// import { Container } from './styles';

const src = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.label}>Pomorodo 🍅</Text>

      <Timer></Timer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 24,
  },
  safeArea: {
 
  },
});

export default src;
