import { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import OpenModalButton from "./OpenModalButton";
import ListsItem from "./ListsItem";
import AppBar from "./AppBar";
import {
  Grid,
  Typography,
  List,
  makeStyles,
  Container,
} from "@material-ui/core";
import { READ_TASKS } from "../actions";

import firebase, { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  bg: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Lists: React.FC = (props: any) => {
  const { state, dispatch } = useContext(AppContext);
  const classes = useStyles();

  //データ取得
  const getData = async () => {
    const colRef = db
      .collection("tasks")
      .orderBy("createdAt", "desc")
      .limit(10);
    const snapshots = await colRef.get();
    const docs = snapshots.docs.map((doc) => doc.data());
    dispatch({
      type: READ_TASKS,
      tasks: docs,
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const unSub = firebase.auth().onAuthStateChanged((user) => {
      !user && props.history.push("login");
    });
    return () => unSub();
  });

  return (
    <>
      <OpenModalButton />
      <AppBar props={props} />
      <Container>
        <div className={classes.root}>
          <Grid item container>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                タスク一覧
              </Typography>
              <div className={classes.bg}>
                <List>
                  {state.tasks.map((task: any, index: number) => (
                    <ListsItem key={index} task={task} />
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Lists;
