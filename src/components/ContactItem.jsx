import { Grid, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useContactContext } from "../contexts/ContactContext";

const ContactItem = ({ item }) => {
  const { deleteContact } = useContactContext();
  return (
    <Grid item xs={12} md={3} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image="https://avatars.mds.yandex.net/i?id=5b20eaa4cd364bc62e429a9250d22de22cc0f9de-9033858-images-thumbs&n=13"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name} {item.surname}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {item.phoneNumber}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="error" onClick={() => deleteContact(item.id)}>
            <DeleteOutlinedIcon />
          </IconButton>
          <IconButton>
            <EditIcon sx={{ color: "#45CFDD" }} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactItem;
