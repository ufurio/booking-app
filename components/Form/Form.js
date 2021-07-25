import styles from "./Form.module.css";
import { useContext, useState } from "react";
import FormContext from "../../utils/Form/FormContext";
import Link from "next/link";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    time: "9am",
    date: "",
    isCancelled: false,
  });
  const { handleSubmit, time_options } = useContext(FormContext);
  const formSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({
      name: "",
      number: "",
      time: "9am",
      date: "",
      isCancelled: false,
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={styles.form}>
      <Link href="/appointments">
        <button>appointments</button>
      </Link>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={styles.formInput}
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.formLabel}>
          Contact No.
        </label>
        <input
          type="tel"
          name="number"
          className={styles.formInput}
          placeholder="Enter your contact number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="date" className={styles.formLabel}>
          Preferred Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          className={styles.formInput}
          placeholder="Pick your preferred date"
          onChange={handleChange}
          required
        />
      </div>
      {/* <div className={styles.formGroup}>
        <label htmlFor="time" className={styles.formLabel}>
          Preferred Time
        </label>
        <select
          name="time"
          onChange={handleChange}
          value={formData.time}
          placeholder="Please pick your preferred time"
        >
          {time_options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.id}({option.time}) has {option.count} slots left.
              </option>
            );
          })}
        </select>
      </div> */}

      <button type="submit" className={styles.formButton} onClick={formSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
