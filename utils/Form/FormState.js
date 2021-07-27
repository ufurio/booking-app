import * as actionTypes from "./FormActions";
import { useReducer } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";

const FormState = (props) => {
  const INITIAL_STATE = {
    appointments: [],
    timeSlots: [],
  };
  const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const handleSubmit = (formData) => {
    return dispatch({
      type: actionTypes.SUBMIT,
      payload: formData,
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

  const getTimeSlots = (dateArr, date) => {
    return dispatch({
      type: actionTypes.CHANGE_DATE,
      payload: { dateArr, date },
    });
  };

  return (
    <FormContext.Provider
      value={{
        appointments: state.appointments,
        timeSlots: state.timeSlots,
        handleSubmit,
        handleDelete,
        handleSort,
        getTimeSlots,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
