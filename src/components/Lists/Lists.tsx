import { useContext, useEffect } from "react";
import AppContext from "../../contexts/AppContext";
import OpenModalButton from "../OpenModalButton";
import ListsItem from "../ListsItem";
import MenuAppBar from "../MenuAppBar";
import {
  Grid,
  Typography,
  List,
  makeStyles,
  Container,
} from "@material-ui/core";
import { READ_TASKS } from "../../actions";
import { RouteComponentProps } from "react-router-dom";

import { db } from "../../firebase";

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

interface Props extends RouteComponentProps<{}> {}

const Lists: React.FC<Props> = (props) => {
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

  return (
    <>
      <OpenModalButton />
      <MenuAppBar history={props.history} />
      <Container>
        <div className={classes.root}>
          <Grid item container>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                タスク一覧
              </Typography>
              <div className={classes.bg}>
                <List>
                  {state.tasks.map((task, index) => (
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
