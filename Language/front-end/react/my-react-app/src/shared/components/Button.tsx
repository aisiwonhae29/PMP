import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function Button({ label, ...rest }: Props) {
  return <button {...rest}>{label}</button>;
}
