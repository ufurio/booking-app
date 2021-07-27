import appointments from "../../../data";

const handler = async (req, res) => {
  const groupByProperty = (array, property) =>
    array.reduce((acc, obj) => {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push({ time: obj.time });
      return acc;
    }, {});

  const dateArr = groupByProperty(appointments, "date");
  return res.status(200).json({ data: dateArr });
};

export default handler;
