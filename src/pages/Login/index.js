import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
  return (
    <Container>
      <Title>
        Página de login
        <small>Oieee</small>
      </Title>
      <Paragrafo>Lorem ioosnm Nmanj</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
