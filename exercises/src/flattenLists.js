const flattenLists = (list) => {
  const combine = (result, item) =>
    Array.isArray(item)
      ? result.concat(flattenLists(item))
      : result.concat(item);

  const result = list
    .reduce((result, item) => combine(result, item), [])
    .filter((item) => item !== null && item !== undefined);

  return result;
};

export default flattenLists;
