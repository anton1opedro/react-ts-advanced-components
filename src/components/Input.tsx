import type { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Input(props: InputProps) {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </p>
  );
}

export { Input };
