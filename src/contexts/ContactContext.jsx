import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";
import axios from "axios";
// import { DataObject } from "@mui/icons-material";

const contactContext = createContext();

export const useContactContext = () => useContext(contactContext);

const ContactContext = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  //? стягиваем данные с АПИ и добавляем их в наше состояние
  async function getContacts() {
    const { data } = await axios(API);

    setContacts(data);
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }
  let value = { contacts, getContacts, deleteContact };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export default ContactContext;
