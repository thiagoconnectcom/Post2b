import React from "react";
import { Container, TitleHeader} from "./styles";

export default function Header() {
  return (
    <Container>
      <div className="container">
        <TitleHeader className="py-3">Kanban board</TitleHeader>
      </div>
    </Container>
  );
}
