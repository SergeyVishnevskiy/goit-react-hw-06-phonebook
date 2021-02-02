import React from "react";
import PropTypes from "prop-types";
import styles from "./OneContact.module.css";
import { userDelete } from "../../redux/actions/itemsAction";
import { useDispatch } from "react-redux";

const OneContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleUserDelete = (id) => {
    dispatch(userDelete(id));
    const localArr = JSON.parse(localStorage.getItem("localContacts"));
    const newArr = localArr.filter((item) => item.id !== id);
    localStorage.setItem("localContacts", JSON.stringify(newArr));
  };

  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button
        className={styles.deleteButton}
        onClick={() => handleUserDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default OneContact;

OneContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
