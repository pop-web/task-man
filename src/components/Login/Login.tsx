import { useContext } from "react";
import MenuAppBar from "../MenuAppBar";
import AppContext from "../../contexts/AppContext";
import { LOGIN } from "../../actions";
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login: React.FC = (props: any) => {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);

  const Login = async (e: any) => {
    e.preventDefault();
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const user = await firebase.auth().signInWithPopup(provider);
      if (user) {
        dispatch({
          type: LOGIN,
          user,
        });
      }
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <>
      <MenuAppBar props={props} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={Login}
            >
              Googleでログイン
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
