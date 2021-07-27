import * as actionTypes from "./FormActions";
import { getTimeSlots } from "../timeSlots/index";

const FormReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT:
      const formData = action.payload;
      const newFormData = { ...formData, id: Math.floor(Math.random() * 100) };
      return {
        ...state,
        appointments: [...state.appointments, newFormData],
      };
    case actionTypes.DELETE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appoinments.filter((appointment) => {
          appointment.id !== action.payload;
        }),
      };
    case actionTypes.SORT:
      console.log(payload);
      const { category, ascending } = action.payload;
      const sorted = state.appointments.sort((a, b) => {
        let itemA = a[category];
        let itemB = b[category];
        if (category === "name") {
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
    default:
      return state;
  }
};

export default FormReducer;
