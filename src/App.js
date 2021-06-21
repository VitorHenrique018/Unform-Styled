import React, {useRef} from "react"

import { Circulo } from "./components/Circulo";
import { Title } from "./components/Title";
import { Button } from "./components/Button";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import Input from "./components/Form/Input";

const initialData = {
  email: "vitorhenrique018@gmail.com",
  address: {
    city: 'Goiânia'
  }
};

function App() {

  const formRef = useRef(null)

  function handleSubmit(data) {

    console.log(data);

  }

  return (
    <div>
      <Title>Olá Mundo</Title>
      <Circulo />
      <Button />

      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
          <Input name="city" />
          <Input name="state" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;

//
