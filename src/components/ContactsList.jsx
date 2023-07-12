import React, { useEffect } from "react";
import { useContactContext } from "../contexts/ContactContext";
import { Grid, Typography } from "@mui/material";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts, getContacts } = useContactContext();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <Typography sx={{ my: 3 }} variant="h3" align="center" component="h2">
        Contact Book
      </Typography>
      <Grid container spacing={2}>
        {contacts.length > 0 ? (
          contacts.map((item) => <ContactItem key={item.id} item={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </Grid>
    </div>
  );
};

export default ContactsList;
