import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./AddContact.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userAdd } from "../../redux/actions/itemsAction";

const Phonebook = ({ setShowAlert }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.items);
  const dispatch = useDispatch();

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

    dispatch(userAdd({ name, number, id: uuidv4() }));

    localStorage.setItem(
      "localContacts",
      JSON.stringify([...contacts, { name, number, id: uuidv4() }])
    );
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
  setShowAlert: PropTypes.func.isRequired,
};
