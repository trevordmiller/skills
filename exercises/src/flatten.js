const flatten = (list) => {
  const combine = (result, item) =>
    Array.isArray(item) ? result.concat(flatten(item)) : result.concat(item);

  const result = list
    .reduce((result, item) => combine(result, item), [])
    .filter((item) => item !== null && item !== undefined);

  return result;
};

export default flatten;
