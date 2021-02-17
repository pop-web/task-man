import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { Fab, makeStyles } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "fixed",
    right: 12,
    bottom: 12,
  },
}));

const AddFormDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
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
      <AddTaskForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddFormDialog;
