import * as React from 'react';

export type ButtonProps = {
  label: string;
};

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;