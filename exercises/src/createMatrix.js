const createMatrix = (text) => {
  const rows = text
    .split("\n")
    .map((textLine) =>
      textLine
        .split(" ")
        .map((value) => Number(value))
    );

  const columns = rows[0].reduce((result, _, index) => {
    const column = rows.map((row) => row[index]);

    return [
      ...result,
      column,
    ];
  }, []);

  const result = {
    rows,
    columns,
  };

  return result;
};

export default createMatrix;
