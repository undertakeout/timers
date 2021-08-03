export const millisecondsToTime = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const time = [
    stretch(hours.toString()),
    stretch(minutes.toString()),
    stretch(seconds.toString())
  ].join(":");

  return time;
};

export const getID = () => {
  return Math.floor(Math.random() * 10000000);
};

const stretch = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const aTimer = (att = {}) => {
  return {
    title: att.title || "Timer",
    id: getID(),
    elapsed: millisecondsToTime(100),
    isRunning: false
  };
};
