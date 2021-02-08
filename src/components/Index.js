import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>件名</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody>
          {state.task.map((event, index) => (
            <tr key={index}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.detail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Index;
