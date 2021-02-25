import { useContext } from "react";
import { MODAL_OPEN } from "../actions";
import AddTaskForm from "./AddTaskForm";
import { Fab, makeStyles } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import AppContext from "../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "fixed",
    right: 12,
    bottom: 12,
    zIndex: 1000,
  },
}));

const OpenModalButton = ({ AddTaskFormRef }) => {
  const { dispatch } = useContext(AppContext);
  const classes = useStyles();
  const handleClickOpen = () => {
    dispatch({
      type: MODAL_OPEN,
    });
  };
  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.addBtn}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <AddTaskForm ref={AddTaskFormRef} />
    </div>
  );
};

export default OpenModalButton;
