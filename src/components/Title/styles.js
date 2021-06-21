import styled from 'styled-components'

export const ContainerTitle = styled.h1`
    color: #f00;
    background: grey;

    span {
        font-size: 12px;
    }

`

//herda tudo da estilização anterior/Herança de estilos
export const ContainerTitleMenor = styled(ContainerTitle)`
    color: #00f;
    font-size: 16px;

`