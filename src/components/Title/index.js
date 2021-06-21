import React from "react";
import { ContainerTitle, ContainerTitleMenor} from "./styles";

export const Title = () => (
  <div>
    <ContainerTitle>
        Titulo
        <span>Sub-Titulo</span>
    </ContainerTitle>

    <ContainerTitleMenor>Titulo Menor</ContainerTitleMenor>
  </div>
);

export default Title;
