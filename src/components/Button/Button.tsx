import * as React from 'react';
import 'bulma/css/bulma.min.css';

export type ButtonProps = {
  label: string;
};

const Button = (props: ButtonProps) => {
  return <button className="button">{props.label}</button>;
};

export default Button;
