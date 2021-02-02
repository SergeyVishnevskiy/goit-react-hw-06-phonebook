import React from "react";
import PropTypes from "prop-types";
import styles from "./OneContact.module.css";

const OneContact = ({ name, number, id, deleteContact }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button className={styles.deleteButton} onClick={() => deleteContact(id)}>
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
  deleteContact: PropTypes.func.isRequired,
};
