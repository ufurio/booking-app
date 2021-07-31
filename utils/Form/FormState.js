import * as actionTypes from "./FormActions";
import { useReducer } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";
import { sendAppointment } from "../methods/sendAppointment";

const FormState = (props) => {
  const INITIAL_STATE = {
    appointments: [],
    timeSlots: [],
    response: "",
    filterDate: [],
  };
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const setAppointments = async (appointments) => {
    return dispatch({
      type: actionTypes.SET_APPOINTMENTS,
      payload: appointments,
    });
  };

  const handleSubmit = async (formData) => {
    const { message } = await sendAppointment(formData);
    return dispatch({
      type: actionTypes.SUBMIT,
      payload: message,
    });
  };

  const handleDelete = (id) => {
    return dispatch({
      type: actionTypes.DELETE_APPOINTMENT,
      payload: id,
    });
  };

  const handleSort = (category, ascending) => {
    return dispatch({
      type: actionTypes.SORT,
      payload: { category, ascending },
    });
  };

  const filterByDate = (appointments) => {
    return dispatch({
      type: actionTypes.FILTER_DATE,
      payload: appointments,
    });
  };

  const getTimeSlots = (dateArr, date) => {
    return dispatch({
      type: actionTypes.CHANGE_DATE,
      payload: { dateArr, date },
    });
  };

  return (
    <FormContext.Provider
      value={{
        sortedAppointments: state.appointments,
        timeSlots: state.timeSlots,
        response: state.response,
        filterDate: state.filterDate,
        setAppointments,
        handleSubmit,
        handleDelete,
        handleSort,
        filterByDate,
        getTimeSlots,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
