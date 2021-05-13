import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//templates
import Panel from "../../templates";

export default function KanbanBoard() {
  const [quadro, setQuadro] = useState([]);
  const [inputVisible, setVisibleInput] = useState(false);

  const inputEl = React.useRef({ nameQuadro: null });

  const handleAddQuadro = () => {
    const { nameQuadro } = inputEl.current;
    setQuadro([...quadro, { name: nameQuadro.value }]);
  };

  useEffect(() => {
    setVisibleInput(false);
  }, [quadro]);

  return (
    <Panel title="Home">
      <Row>
        {quadro.map((item, i) => (
          <Col key={i} sm={6} md={3} lg={3} xl={3}>
            <Link to={`/panel/${item.name}`}>
              <Card className="cursor-pointer mt-2">
                <Card.Body>{item.name}</Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
        <Col sm={6} md={3} lg={3} xl={3}>
          <Card
            className="cursor-pointer mt-2"
            onClick={() => setVisibleInput(true)}
          >
            {inputVisible ? (
              <React.Fragment>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Crie um novo quadro"
                    className="col-lg-4 py-3 "
                    ref={(el) => (inputEl.current.nameQuadro = el)}
                  />
                  <Button onClick={() => handleAddQuadro()}>Adicionar</Button>
                </div>
              </React.Fragment>
            ) : (
              <Card.Body>+ Criar novo Quadro</Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Panel>
  );
}
