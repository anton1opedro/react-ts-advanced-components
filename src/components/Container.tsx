import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>(props: ContainerProps<C>) {
  const Component = props.as || "div";
  return <Component {...props}>{props.children} </Component>;
}

export default Container;
