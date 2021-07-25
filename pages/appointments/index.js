import React from "react";
import styles from "../../styles/Appointments.module.css";
import Appoinment from "../../components/Appointment/Appointment";

function Appointments() {
  return (
    <div className={styles.container}>
      <Appoinment />
    </div>
  );
}

export default Appointments;
