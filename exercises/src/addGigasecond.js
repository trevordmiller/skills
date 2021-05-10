const addGigasecond = (startISOString) => {
  const startDate = new Date(startISOString);

  const gigasecond = 1e9 * 1e3;

  const endDate = new Date(startDate.getTime() + gigasecond);

  const endISOString = endDate.toISOString();

  return endISOString;
};

export default addGigasecond;
