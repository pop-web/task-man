import React, {
  useContext,
  useState,
  useEffect,
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

const AddTaskForm:React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [docId, setDocId] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

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

  const addTask = (e:any) => {
    e.preventDefault();
    const newDocId = db.collection("tasks").doc().id;
    db.collection("tasks").doc(newDocId).set({
      docId: newDocId,
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

  const updateTask = (e:any) => {
    e.preventDefault();
    db.collection("tasks").doc(docId).update({
      docId,
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

  const cancelTask = (e:any) => {
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
    setSubmitDisabled(disabled);
  }, [title]);

  return (
    <>
      <Dialog
        open={state.modal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {isEditing ? "タスクを編集" : "タスクを追加"}
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            label="件名"
            autoFocus
            autoComplete="off"
            type="text"
            margin="dense"
            value={title}
            onChange={(e:any) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
          />

          <TextField
            label="詳細"
            multiline
            autoComplete="off"
            margin="dense"
            value={detail}
            onChange={(e:any) => setDetail(e.target.value)}
            fullWidth
            rows={4}
            variant="outlined"
          />
          <DialogActions>
            <Button color="primary" onClick={addTask} disabled={submitDisabled}>
              追加
            </Button>{" "}
            <Button
              color="primary"
              onClick={updateTask}
              disabled={submitDisabled}
            >
              更新
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
