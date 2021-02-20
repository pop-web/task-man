import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import FormDialog from "./FormDialog";
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
import {
  Folder as FolderIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import { MODAL_OPEN } from "../actions";

import { db } from "../firebase";

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
  const { state, dispatch } = useContext(AppContext);
  const [tasks, setTasks] = useState([]);
  const classes = useStyles();

  //データ取得
  const getData = async () => {
    const colRef = db
      .collection("tasks")
      .orderBy("createdAt", "desc")
      .limit(10);
    const snapshots = await colRef.get();
    const docs = snapshots.docs.map((doc) => doc.data());
    await setTasks(docs);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEditOpen = () => {
    dispatch({
      type: MODAL_OPEN,
    });
  };

  console.log(tasks);
  return (
    <div className={classes.root}>
      <FormDialog />
      <Grid item container>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            タスク一覧
          </Typography>
          <div className={classes.demo}>
            <List>
              {tasks.map((task, index) => (
                <ListItem
                  key={index}
                  divider={true}
                  button={true}
                  onClick={handleEditOpen}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={task.title} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <MoreHorizIcon />
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
