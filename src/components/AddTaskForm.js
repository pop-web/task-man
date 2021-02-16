import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { CREATE_TASK } from "../actions";

import {
  Button,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@material-ui/core";

const AddTaskForm = ({ open }) => {
  const { dispatch } = useContext(AppContext);
  //const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_TASK,
      title,
      detail,
    });
    setTitle("");
    setDetail("");
  };
  const cancelTask = (e) => {
    e.preventDefault();
  };
  const handleClose = () => {
    //setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">タスクを追加</DialogTitle>
        <DialogContent>
          <TextField
            label="件名"
            autoFocus
            autoComplete="off"
            type="text"
            margin="dense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
          />

          <TextField
            label="詳細"
            multiline
            autoComplete="off"
            margin="dense"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            fullWidth
            rows={4}
            variant="outlined"
          />
          <DialogActions>
            <Button color="primary" onClick={addTask}>
              追加
            </Button>{" "}
            <Button color="primary" onClick={cancelTask}>
              キャンセル
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTaskForm;
