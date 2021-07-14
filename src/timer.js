import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { millisecondsToTime } from "./utilities";
import TimerButton from "./TimerButton";

export default function Timer({ title, project, time }) {
  const timeString = millisecondsToTime(time);
  return (
    <View styles={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text> {project}</Text>
      <Text style={styles.timeSoFar}> {timeString} </Text>
      <View style={styles.button}>
        <TimerButton color="pink" small title="Edit" />
        <TimerButton color="pink" small title="Remove" />
      </View>
      <TimerButton color="pink" title="Start" />
    </View>
  );
}
const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
