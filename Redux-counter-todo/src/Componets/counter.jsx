import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card className="shadow-lg p-4 text-center" style={{ width: "22rem" }}>
            <Card.Body>
              <h2 className="mb-4">Counter: {count}</h2>
              <div className="d-flex justify-content-between">
                <Button variant="success" onClick={() => dispatch(increment())}>
                  +
                </Button>
                <Button variant="danger" onClick={() => dispatch(decrement())}>
                  -
                </Button>
                <Button variant="secondary" onClick={() => dispatch(reset())}>
                  Reset
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
