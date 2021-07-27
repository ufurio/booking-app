const groupByProperty = (array, property) =>
  array.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({ time: obj.time });
    return acc;
  }, {});

export const getTimeSlots = (dateArr, date) => {
  let availableTimeSlots = [];
  const timeSlots = ["9am", "10am", "11am", "1pm", "2pm", "3pm", "4pm"];
  if (dateArr[date] === undefined) {
    timeSlots.forEach((slot) => {
      return availableTimeSlots.push({ time: slot, count: 5 });
    });
  } else {
    const timeArr = groupByProperty(dateArr[date], "time");
    if (dateArr[date].length < 30) {
      timeSlots.forEach((slot) => {
        if (timeArr[slot] === undefined) {
          return availableTimeSlots.push({ time: slot, count: 5 });
        }
        if (timeArr[slot].length < 5) {
          return availableTimeSlots.push({
            time: slot,
            count: 5 - timeArr[slot].length,
          });
        }
      });
    }
  }

  return availableTimeSlots;
};
