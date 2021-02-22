import { useContext, useEffect, useState, useRef } from "react";
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
  const { dispatch } = useContext(AppContext);
  const [tasks, setTasks] = useState([]);
  const AddTaskFormRef = useRef(null);
  const classes = useStyles();

  //データ取得
  const getData = async () => {
    const colRef = db
      .collection("tasks")
      .orderBy("createdAt", "desc")
      .limit(10);
    const snapshots = await colRef.get();
    const docs = snapshots.docs.map((doc) => doc.data());
    setTasks(docs);
  };

  useEffect(() => {
    console.log(tasks);
    getData();
  }, []);

  const handleEditOpen = (task) => {
    dispatch({
      type: MODAL_OPEN,
    });
    AddTaskFormRef.current.setTask(task);
  };
  console.log(getData);
  return (
    <div className={classes.root}>
      <FormDialog AddTaskFormRef={AddTaskFormRef} />
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
                  onClick={() => handleEditOpen(task)}
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
