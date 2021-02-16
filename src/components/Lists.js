import React, { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";
import {
  Avatar,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Delete as DeleteIcon, Folder as FolderIcon } from "@material-ui/icons";
import FormDialog from "./FormDialog";

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

const Lists = (props) => {
  const { state } = useContext(AppContext);
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(true);

  console.log(props);
  return (
    <div className={classes.root}>
      <FormDialog />
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
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={task.title}
                    secondary={secondary ? "Secondary text" : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
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
