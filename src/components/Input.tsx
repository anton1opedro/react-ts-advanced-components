import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return (
      <p>
        <label htmlFor={props.id}>{props.label}</label>
        <input name={props.id} {...props} ref={ref} />
      </p>
    );
  },
);

export { Input };
