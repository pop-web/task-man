import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";

import {
  Fab,
  Avatar,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Add as AddIcon, Delete, Folder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  addBtn: {
    position: "fixed",
    right: 12,
    bottom: 12,
  },
}));

const Lists = () => {
  const { state } = useContext(AppContext);
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(true);

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        component={Link}
        to={"/add"}
        className={classes.addBtn}
      >
        <AddIcon />
      </Fab>
      <Grid item container>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            タスク一覧
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {state.task.map((task) => (
                <ListItem divider={true}>
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
      </Grid>
    </div>
  );
};

export default Lists;
