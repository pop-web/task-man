import React, {
  useContext,
  useState,
  useEffect,
  useImperativeHandle,
} from "react";
import { MODAL_CLOSE, READ_TASKS } from "../actions";
import AppContext from "../contexts/AppContext";

import {
  Button,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@material-ui/core";

import firebase, { db } from "../firebase";

const AddTaskForm = React.forwardRef((_, ref) => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [addDisabled, setAddDisabled] = useState(true);

  // Listsコンポーネント側でtaskを渡し実行
  useImperativeHandle(ref, () => ({
    setTask: (task) => {
      setTitle(task.title);
      setDetail(task.detail);
    },
  }));

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

  const addTask = (e) => {
    e.preventDefault();
    const docId = db.collection("tasks").doc().id;
    db.collection("tasks").doc(docId).set({
      docId: docId,
      title,
      detail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch({
      type: MODAL_CLOSE,
    });
    setTitle("");
    setDetail("");
    getData();
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
    setTitle("");
    setDetail("");
  };

  useEffect(() => {
    const disabled = title === "";
    setAddDisabled(disabled);
  }, [title]);

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
            required
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
            <Button color="primary" onClick={addTask} disabled={addDisabled}>
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
});

export default AddTaskForm;
