import * as actionTypes from "./FormActions";
import { getTimeSlots } from "../methods/getTimeSlots";
import { groupByProperty } from "../methods/groupByProperty";

const FormReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case actionTypes.SUBMIT:
      return {
        ...state,
        response: action.payload,
      };
    case actionTypes.DELETE_APPOINTMENT:
      const newArr = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
      return {
        ...state,
        appointments: newArr,
      };
    case actionTypes.SORT:
      const { category, ascending } = action.payload;
      const sorted = state.appointments.sort((a, b) => {
        let itemA = a[category];
        let itemB = b[category];
        if (category === "firstName") {
          itemA = a[category].toLowerCase();
          itemB = b[category].toLowerCase();
        }
        if (ascending ? itemA < itemB : itemA > itemB) {
          return -1;
        } else if (ascending ? itemA > itemB : itemA < itemB) {
          return 1;
        } else return 0;
      });
      return {
        ...state,
        appointments: sorted,
      };
    case actionTypes.CHANGE_DATE:
      const { dateArr, date } = action.payload;
      const time = getTimeSlots(dateArr, date);
      return {
        ...state,
        timeSlots: time,
      };
    case actionTypes.FILTER_DATE:
      const groupArr = groupByProperty(action.payload, "date");
      const dates = Object.keys(groupArr);
      return { ...state, filterDate: dates };
    default:
      return state;
  }
};

export default FormReducer;
