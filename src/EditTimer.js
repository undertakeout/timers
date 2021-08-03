import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./timer";

export default class EditTimer extends React.Component {
  state = { formOpen: false };

  handleRemove = timer => {
    const {onFormRemove} = this.props
    onFormRemove(timer)

  }

  handleSubmit = timer => {
    const {onFormSubmit} = this.props
    // console.log(timer)
    onFormSubmit(timer)
    this.closeForm()
  }

  closeForm = () => {
    this.setState({formOpen : false})
  }

  openForm = () => {
    this.setState({formOpen : true})
  }

  render() {
    const { id, title, time, isRunning } = this.props;
    const { formOpen } = this.state;

    if (formOpen) {
      return <TimerForm id={id} title={title} onFormSubmit = {this.handleSubmit} onFormClose = {this.closeForm}/>;
    }
    return <Timer title={title} id={id} time={time} isRunning={isRunning} onEditPress = {this.openForm} onRemovePress = {this.handleRemove}/>;
  }
}
