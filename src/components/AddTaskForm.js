import { useContext, useState } from "react";
import { CREATE_TASK, MODAL_CLOSE } from "../actions";
import AppContext from "../contexts/AppContext";

import {
  Button,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@material-ui/core";

const AddTaskForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_TASK,
      title,
      detail,
    });
    dispatch({
      type: MODAL_CLOSE,
    });
    setTitle("");
    setDetail("");
  };
  const cancelTask = (e) => {
    e.preventDefault();
    dispatch({
      type: MODAL_CLOSE,
    });
  };
  const handleClose = () => {
    dispatch({
      type: MODAL_CLOSE,
    });
  };
  return (
    <>
      <Dialog
        open={state.modal}
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
