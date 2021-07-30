export const groupByProperty = (array, property) =>
  array.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({ time: obj });
    return acc;
  }, {});
