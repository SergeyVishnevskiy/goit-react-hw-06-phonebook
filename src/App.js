import "./App.css";
import React, { useState, useEffect } from "react";
import AddContact from "./components/AddContact/AddContact";
import AllContacts from "./components/AllContacts/AllContacts";
import FilterContacts from "./components/FilterContacts/FilterContacts";
import Alert from "./components/Alert/Alert";
import { CSSTransition } from "react-transition-group";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [showAlert, setShowAlert] = useState({ status: false, text: "" });

  const inputFilter = ({ target }) => {
    setFilter(target.value.toLowerCase());
  };

  const deleteContact = (id) => {
    setContacts((state) => state.filter((item) => item.id !== id));
    const localArr = JSON.parse(localStorage.getItem("localContacts"));
    const newArr = localArr.filter((item) => item.id !== id);
    localStorage.setItem("localContacts", JSON.stringify(newArr));
  };

  useEffect(() => {
    if (!localStorage.getItem("localContacts")) {
      localStorage.setItem("localContacts", JSON.stringify([]));
    }
    setContacts((state) => JSON.parse(localStorage.getItem("localContacts")));
  }, []);

  return (
    <div className="container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="titlePhonebook"
      >
        <h1 className="titlePhonebook">Phonebook</h1>
      </CSSTransition>
      <AddContact
        setContacts={setContacts}
        contacts={contacts}
        setShowAlert={setShowAlert}
      />
      {contacts.length > 1 && <FilterContacts inputFilter={inputFilter} />}
      {contacts.length > 0 && (
        <AllContacts
          contacts={contacts}
          filter={filter}
          deleteContact={deleteContact}
        />
      )}
      <CSSTransition
        in={showAlert.status}
        timeout={250}
        classNames="alert"
        mountOnEnter
        unmountOnExit
      >
        <Alert showAlert={showAlert.text} />
      </CSSTransition>
    </div>
  );
}

export default App;
