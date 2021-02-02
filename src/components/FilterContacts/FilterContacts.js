import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterConatcts.module.css";

const FilterContacts = ({ inputFilter }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.inputName}>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={inputFilter}
        className={styles.filter}
      ></input>
    </div>
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  inputFilter: PropTypes.func.isRequired,
};
