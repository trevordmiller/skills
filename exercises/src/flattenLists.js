const combineLists = (result, item) =>
  Array.isArray(item) ? result.concat(flattenLists(item)) : result.concat(item);

const flattenLists = (list) => {
  const result = list
    .reduce((result, item) => combineLists(result, item), [])
    .filter((item) => item !== null && item !== undefined);

  return result;
};

export default flattenLists;
