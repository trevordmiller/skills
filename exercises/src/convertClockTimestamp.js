const convertClockTimestamp = ({ hours, minutes }) => {
  const totalHours = ((hours + Math.floor(minutes / 60)) % 24);

  const totalMinutes = minutes % 60;

  const hoursLabel = totalHours
    .toString()
    .padStart(2, "0");

  const minutesLabel = totalMinutes
    .toString()
    .padStart(2, "0");

  const label = `${hoursLabel}:${minutesLabel}`;
  return label;
};

export default convertClockTimestamp;
