import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { CREATE_TASK } from "../actions";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
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
    setTitle("");
    setDetail("");
  };
  return (
    <>
      <h2 className="h5 mb-5">タスクの追加</h2>
      <Form>
        <Form.Group controlId="formTaskTitle">
          <Form.Control
            type="text"
            placeholder="件名"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Row} controlId="formTaskDetail">
          <Form.Label column sm="2">
            詳細
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              rows={5}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </Col>
        </Form.Group>
        <div className="text-right">
          <Button variant="primary" type="submit" onClick={addTask}>
            追加
          </Button>{" "}
          <Button variant="outline-primary" type="submit">
            キャンセル
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Add;
