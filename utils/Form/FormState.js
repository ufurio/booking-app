import * as actionTypes from "./FormActions";
import { useReducer } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";

const FormState = (props) => {
  const INITIAL_STATE = {
    appointments: [],
    time_options: [
      { id: "9am", time: "9:00", count: 5 },
      { id: "10am", time: "10:00", count: 5 },
      { id: "11am", time: "11:00", count: 5 },
      { id: "1pm", time: "13:00", count: 5 },
      { id: "2pm", time: "14:00", count: 5 },
      { id: "3pm", time: "15:00", count: 5 },
    ],
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

  return (
    <FormContext.Provider
      value={{
        state: state,
        appointments: state.appointments,
        time_options: state.time_options,
        handleSubmit,
        handleDelete,
        handleSort,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
