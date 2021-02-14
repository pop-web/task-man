import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { CREATE_TASK } from "../actions";

import { Button, TextField } from "@material-ui/core";

const Add = (props) => {
  const { dispatch } = useContext(AppContext);
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
    props.history.push("/");
  };
  const cancelTask = (e) => {
    e.preventDefault();
    props.history.push("/");
  };
  return (
    <>
      <h2 className="h5 mb-5">タスクの追加</h2>
      <TextField
        type="text"
        placeholder="件名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoComplete="off"
      />
      詳細
      <TextField
        as="textarea"
        rows={5}
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        autoComplete="off"
      />
      <div className="text-right">
        <Button variant="primary" type="submit" onClick={addTask}>
          追加
        </Button>{" "}
        <Button variant="outline-primary" type="submit" onClick={cancelTask}>
          キャンセル
        </Button>
      </div>
    </>
  );
};

export default Add;
