import React from 'react';
import { ButtonMaior } from './styles';

const clicar = () => {
  console.log('Clicou');
};

export const Button = () => <ButtonMaior onClick={clicar}>Acessar</ButtonMaior>;

export default Button;
