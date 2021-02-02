import React from "react";
import OneContact from "../OneContact/OneContact";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./AllContacts.css";

const AllContacts = () => {
  const contacts = useSelector((state) => state.items);
  const inputFilter = useSelector((state) => state.filter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputFilter)
  );

  return (
    <TransitionGroup component="ul">
      {filterContacts.map(({ name, number, id }) => (
        <CSSTransition key={id} timeout={250} classNames="listItem">
          <OneContact key={id} name={name} number={number} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default AllContacts;
