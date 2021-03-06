import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { millisecondsToTime } from "./utilities";
import TimerButton from "./TimerButton";



export default class Timer extends React.Component {

  handleRemovePress = () =>{
    const{id,onRemovePress} = this.props
    onRemovePress(id)
  }
  render(){
    const {time,title,onEditPress} = this.props
    const timeString = millisecondsToTime(time)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.timeSoFar}> {timeString} </Text>
      <View style={styles.button}>
        <TimerButton color="pink" small title="Edit" onPress = {onEditPress} />
        <TimerButton color="pink" small title="Remove" onPress = {this.handleRemovePress} />
      </View>
      <TimerButton color="pink" title="Start" />
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "pink",
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
  timeSoFar: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
