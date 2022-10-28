

const generateData = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({
      "pet name": 'jbj',
      "parent name": 'jbjj',
      email: 'gmail',
      "last visit": new Date().now
    });
  }

  return {
    data: rows,
    columns: Object.keys(rows[0])
  };
};

export default generateData;
