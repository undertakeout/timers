import React from "react";
import { StyleSheet, View } from "react-native";

import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

export default class Toggleable extends React.Component {
  state = { isOpen: false };

  openTheForm = () => {
    this.setState({ isOpen: true });
  };

  formClose = () => {
    this.setState({ isOpen: false });
  };

  handleformSubmit = (timer) => {
    const { onSubmit } = this.props;
    onSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
        {isOpen ? (
          <TimerForm
            onSubmit={this.handleformSubmit}
            onClose={this.formClose}
          />
        ) : (
          <TimerButton title="+" color="black" onPress={this.openTheForm} />
        )}
      </View>
    );
  }
}

// function ToggleableTimerForm({ isOpen }) {
//   return (
//     <View style={[styles.container, !isOpen && styles.buttonPadding]}>
//       {isOpen ? (
//         <TimerForm />
//       ) : (
//         <TimerButton
//           title="+"
//           color="black"
//           onPress={(isOpen) => {
//             isOpen = isOpen ? false : true;
//           }}
//         />
//       )}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});
