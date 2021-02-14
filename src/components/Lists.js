import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";

import {
  Avatar,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete, Folder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Lists = () => {
  const { state } = useContext(AppContext);
  const classes = useStyles();
  const [dense, setDense] = useState(true);
  const [secondary, setSecondary] = useState(true);

  return (
    <>
      <Button variant="contained" color="primary">
        <Link to={"/add"}>タスク追加</Link>
      </Button>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Avatar with text and icon
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            {state.task.map((task) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={task.title}
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </>
  );
};

export default Lists;
