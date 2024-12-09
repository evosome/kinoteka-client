import { AnchorHTMLAttributes, FC } from "react";
import { XLink } from "./styles";
import { LinkProps } from "./types";

const Link: FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  forwardTo,
  children,
  ...props
}) => {
  return <XLink to={forwardTo} {...props}>{children}</XLink>;
};

export default Link;
