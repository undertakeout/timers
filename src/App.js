import React from "react";
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native";
import EditTimer from "./EditTimer";
import Toggleable from "./ToggleDrop";

const getID = () => {
  return Math.floor(Math.random() * 10000000);
};

export default class App extends React.Component {
  state = {
    timers: [
      {
        title: "eat",
        id: getID(),
        time: 6546000,
        isRunning: true
      },
      {
        title: "cook",
        id: getID(),
        time: 1234567,
        isRunning: false
      },
      {
        title: "pie",
        id: getID(),
        time: 99999999,
        isRunning: true
      }
    ]
  };
  render() {
    const { timers } = this.state;
    return (
      <View styles={styles.appContainer}>
        <View styles={styles.titleContainer}>
          <Text style={styles.title}>Timers.</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <Toggleable />
          {timers.map(({ title, id, time, isRunning }) => (
            <EditTimer
              key={id}
              id={id}
              title={title}
              time={time}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA"
  },
  title: {
    fontSize: 40,
    // fontWeight: 'bold',
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "#EC0DFF"
  },
  timerList: {
    paddingBottom: 15
  }
});
