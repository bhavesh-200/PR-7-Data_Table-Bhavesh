import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/todoSlice";
import { Container, Form, Button, ListGroup, Card, Row, Col } from "react-bootstrap";

const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const addNewTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask("");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Todo List</h2>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  addNewTask();
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter a task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit">
                  Add Task
                </Button>
              </Form>

              <ListGroup className="mt-3">
                {tasks.length > 0 ? (
                  tasks.map((t) => (
                    <ListGroup.Item
                      key={t.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {t.text}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch(removeTask(t.id))}
                      >
                        X
                      </Button>
                    </ListGroup.Item>
                  ))
                ) : (
                  <p className="text-center mt-3">No tasks added.</p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;

