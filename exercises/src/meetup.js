const meetup = (description) => {
  const yearNumber = description.match(/\b\d{4}\b/)[0];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames.find((name) => description.includes(name));

  const monthNumber = (monthNames.indexOf(monthName) + 1);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames.find((name) => description.includes(name));

  const daysInMonth = new Date(yearNumber, monthNumber, 0).getDate();

  const matchingDaysInMonth = Array(daysInMonth).fill()
    .map((_, index) => index + 1)
    .filter((day) =>
      new Date(yearNumber, monthNumber - 1, day).getDay() ===
        dayNames.indexOf(dayName)
    );

  const relativeInstances = ["first", "last", "second", "third", "fourth"];
  const relativeInstance = relativeInstances.find((instance) =>
    description.includes(instance)
  );

  const matchingDaysInMonthIndex = {
    "first": 0,
    "last": matchingDaysInMonth.length - 1,
    "second": 1,
    "third": 2,
    "fourth": 3,
  }[relativeInstance];

  const dayNumber = matchingDaysInMonth[matchingDaysInMonthIndex];

  const pad = (number) =>
    number
      .toString()
      .padStart(2, "0");

  return `${yearNumber}-${pad(monthNumber)}-${pad(dayNumber)}`;
};

export default meetup;
