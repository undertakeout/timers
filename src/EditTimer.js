import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./timer";

export default function EditTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen
}) {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
}
