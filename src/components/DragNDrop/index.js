import React, { useState, useRef } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import Select from "react-select";
import { Card, Row, Modal, Form, Button } from "react-bootstrap";

//components
import Badge from "../Badge";

export default function DragNDrop() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    {
      title: "To do",
      items: [
        { titulo: "teste", descricao: "realizar teste", tag: "urgente" },
        { titulo: "teste1", descricao: "realizar teste1", tag: "revisar" },
        { titulo: "teste2", descricao: "realizar teste2", tag: "urgente" },
      ],
    },
    {
      title: "Doing",
      items: [
        { titulo: "teste3", descricao: "realizar teste3", tag: "revisar" },
      ],
    },
    {
      title: "Done",
      items: [
        { titulo: "teste4", descricao: "realizar teste4", tag: "revisar" },
      ],
    },
  ]);
  const [dragging, setDragging] = useState(false);
  const [tag, setTag] = useState();

  const inputEl = React.useRef({
    titulo: null,
    descricao: null,
  });
  const { titulo, descricao } = inputEl.current;

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handletDragStart = (e, item) => {
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    let currentItem = dragItem.current;
    if (e.target !== dragItemNode.current) {
      setData((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = targetItem;
        setData(newList);
        return newList;
      });
    }
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragItemNode.current = null;
  };

  const handleClose = () => setShow(false);

  const handleAddTodo = (e) => {
    e.preventDefault();

    setShow(false);
    setData(
      [...data],
      data[0].items.unshift({
        titulo: titulo.value,
        descricao: descricao.value,
        tag: tag.value,
      })
    );
  };

  const handleDelete = (index) => {
    console.log(index);
  };

  console.log(data);

  return (
    <React.Fragment>
      <Row>
        {data.length > 0 &&
          data.map((grp, grpI) => (
            <div
              key={grp.title}
              onDragEnter={
                dragging && !grp.items.length
                  ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                  : null
              }
              className="dnd-group col-lg-4"
            >
              <div className="group-title d-flex justify-content-between align-items-center">
                {grp.title}

                {grp.title === "To do" && (
                  <FaPlusCircle
                    color="green"
                    size={22}
                    onClick={() => setShow(true)}
                  />
                )}
              </div>
              {grp.items.map((item, itemI) => (
                <div
                  draggable
                  key={item.title}
                  onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnter(e, { grpI, itemI });
                        }
                      : null
                  }
                  className="mb-2"
                >
                  <Card className="w-100">
                    <Card.Header>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{item.titulo}</span>
                        <Badge tag={item.tag} />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        {item.descricao}{" "}
                        <FaTrash
                          color="red"
                          size={14}
                          onClick={() => handleDelete(itemI)}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Criar nova tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-inline" onSubmit={(e) => handleAddTodo(e)}>
            <Form.Label className="mr-sm-2">Titulo</Form.Label>
            <Form.Control
              type="text"
              required
              ref={(el) => (inputEl.current.titulo = el)}
            />
            <Form.Label className="mr-sm-2">Descrição</Form.Label>
            <Form.Control
              type="text"
              required
              ref={(el) => (inputEl.current.descricao = el)}
            />
            <Form.Label className="mr-sm-2">tag</Form.Label>
            <Select
              onChange={(value) => setTag(value)}
              isRequired
              options={[
                { value: "urgente", label: "Urgente" },
                { value: "revisar", label: "Revisar" },
              ]}
            />
            <div className="d-flex justify-content-end">
              <input
                className="btn btn-primary mt-3"
                type="submit"
                value="submit"
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
