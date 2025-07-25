import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never; // Ensure that href is not allowed in button props
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string; // Ensure that href is required in anchor props
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  } else {
    return <button className="button" {...props}></button>;
  }
}

export default Button;
