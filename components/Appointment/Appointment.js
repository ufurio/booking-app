import React, { useState, useContext, useEffect } from "react";
import styles from "./Appointment.module.css";
import FormContext from "../../utils/Form/FormContext";

function Appointment({ appointments }) {
  const [ascending, setAscending] = useState(true);
  const {
    handleDelete,
    handleSort,
    setAppointments,
    sortedAppointments,
    filterByDate,
    filterDate,
  } = useContext(FormContext);

  const sortHandler = (category) => {
    handleSort(category, ascending);
    setAscending(!ascending);
  };

  const filterAppointments = (e) => {
    const filtered = appointments.filter(
      (appointment) => appointment.date === e.target.value
    );
    if (e.target.value === "all") {
      return setAppointments(appointments);
    }
    setAppointments(filtered);
  };

  useEffect(() => {
    setAppointments(appointments);
    filterByDate(appointments);
  }, [appointments]);

  return (
    <div className={styles.container}>
      <h1>Appointments</h1>
      <div className={styles.filter}>
        <p>Filter by Date:</p>
        <select name="filter" onChange={filterAppointments}>
          <option value="all" defaultValue>
            Display all
          </option>
          {filterDate
            ? filterDate.map((date) => {
                return (
                  <option key={date} value={date}>
                    {date}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => sortHandler("firstName")}>First Name</th>
            <th onClick={() => sortHandler("lastName")}>Last Name</th>
            <th onClick={() => sortHandler("contactNumber")}>Contact No.</th>
            <th onClick={() => sortHandler("time")}>Time</th>
            <th onClick={() => sortHandler("date")}>Date</th>
            <th>Cancel Appointment</th>
          </tr>
        </thead>
        <tbody>
          {sortedAppointments
            ? sortedAppointments.map((appointment) => {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.firstName}</td>
                    <td>{appointment.lastName}</td>
                    <td>{appointment.contactNumber}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.date}</td>
                    <td>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(appointment.id)}
                      >
                        Cancel Appointment
                      </button>
                    </td>
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
