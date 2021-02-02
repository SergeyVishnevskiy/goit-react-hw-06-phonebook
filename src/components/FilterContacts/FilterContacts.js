import React from "react";
import styles from "./FilterConatcts.module.css";
import { useDispatch } from "react-redux";
import { filterEdit } from "../../redux/actions/filterAction";

const FilterContacts = () => {
  const dispatch = useDispatch();
  const editFilter = ({ target }) => {
    dispatch(filterEdit(target.value.toLowerCase()));
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.inputName}>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={editFilter}
        className={styles.filter}
      ></input>
    </div>
  );
};

export default FilterContacts;
