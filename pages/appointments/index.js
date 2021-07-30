import React from "react";
import styles from "../../styles/Appointments.module.css";
import Appoinment from "../../components/Appointment/Appointment";

function Appointments({ appointments }) {
  return (
    <div className={styles.container}>
      <Appoinment appointments={appointments} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/appointments");
  const data = await res.json();
  const appointments = data.appointments;
  return {
    props: {
      appointments: appointments,
    },
  };
}

export default Appointments;
