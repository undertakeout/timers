import React from "react";
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native";
import EditTimer from "./EditTimer";
import ToggleableTimerForm from "./ToggleDrop";

export default class App extends React.Component {
  render() {
    return (
      <View styles={styles.appContainer}>
        <View styles={styles.titleContainer}>
          <Text style={styles.title}>Timers.</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} />
          <EditTimer
            id="1"
            title="Mow the lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning
          />
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
