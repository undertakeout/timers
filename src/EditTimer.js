import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./timer";

export default class EditTimer extends React.Component {
  state = { formOpen: false };

  render() {
    const { id, title, time, isRunning } = this.props;
    const { formOpen } = this.state;

    if (formOpen) {
      return <TimerForm id={id} title={title} />;
    }
    return <Timer title={title} id={id} time={time} isRunning={isRunning} />;
  }
}
