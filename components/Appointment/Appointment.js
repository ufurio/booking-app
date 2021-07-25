import React, { useState, useContext } from "react";
import styles from "./Appointment.module.css";
import FormContext from "../../utils/Form/FormContext";

function Appointment() {
  const [ascending, setAscending] = useState(true);
  const { appointments, handleSort } = useContext(FormContext);

  const sortHandler = (category) => {
    handleSort(category, ascending);
    setAscending(!ascending);
  };

  return (
    <div className={styles.container}>
      <h1>Appointments</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => sortHandler("name")}>Name</th>
            <th onClick={() => sortHandler("number")}>Contact No.</th>
            <th onClick={() => sortHandler("time")}>Time</th>
            <th onClick={() => sortHandler("date")}>Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments
            ? appointments.map((appointment) => {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.number}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.date}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Appointment;
