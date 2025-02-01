import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
const contact = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("  ");
  const [email, setemail] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    console.log(name, age, email, desc);
    e.preventDefault();
    const data = { name, age, email, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((val) => val.text())
      .then((dat) => {
        console.log("Success: ", dat);
        setname("");
        setdesc("");
        setemail("");
        setage("");
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "age") {
      setage(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            className={styles.formControl}
            id="name"
            name="name"
            placeholder="John Alia"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="age">Enter your age</label>
          <input
            type="number"
            className={styles.formControl}
            id="age"
            name="age"
            placeholder="23"
            onChange={handleChange}
            value={age}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={styles.formControl}
            id="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" placeholder="Write your concerns here">
            Elaborate your concerns
          </label>
          <textarea
            className={styles.formControl}
            id="desc"
            rows="3"
            placeholder="Write your concerns here"
            onChange={handleChange}
            value={desc}
            name="desc"
          ></textarea>
        </div>
        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
