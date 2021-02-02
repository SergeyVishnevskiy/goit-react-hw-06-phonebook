import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./AddContact.module.css";

const Phonebook = ({ setContacts, contacts, setShowAlert }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputName = ({ target }) => {
    setName(target.value);
  };

  const inputNumber = ({ target }) => {
    setNumber(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      setShowAlert({ status: true, text: "Contact already exist" });
      setTimeout(() => {
        setShowAlert({ status: false, text: "" });
      }, 2000);
      return;
    }
    if (name.length < 2) {
      setShowAlert({ status: true, text: "Name mast content 2 characters" });
      setTimeout(() => {
        setShowAlert({ status: false, text: "" });
      }, 2000);
      return;
    }
    localStorage.setItem(
      "localContacts",
      JSON.stringify([{ name, number, id: uuidv4() }, ...contacts])
    );

    setContacts([{ name, number, id: uuidv4() }, ...contacts]);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={submitHandler}>
      <input
        className={styles.inputName}
        type="text"
        name="name"
        placeholder="Full Name"
        value={name}
        onChange={inputName}
      ></input>
      <input
        className={styles.inputNumber}
        type="text"
        name="number"
        placeholder="Nubmer xxx-xx-xx"
        value={number}
        onChange={inputNumber}
      ></input>
      <button type="submit" className={styles.buttonAddContacts}>
        Add contacts?
      </button>
    </form>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  setContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
