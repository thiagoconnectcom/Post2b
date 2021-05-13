import React from "react";
import { useParams } from "react-router-dom";

//components
import Panel from "../../templates";
import DragNDrop from "../../components/DragNDrop";

export default function Kanban() {
  const { id } = useParams();

  return (
    <Panel title={`Panel - ${id}`}>
      <DragNDrop />
    </Panel>
  );
}
