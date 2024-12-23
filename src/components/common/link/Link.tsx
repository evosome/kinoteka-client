import { AnchorHTMLAttributes, FC } from "react";
import { XLink } from "./styles";
import { LinkProps } from "./types";

const Link: FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  forwardTo,
  withHash,
  children,
  ...props
}) => {
  return (
    <XLink to={{ pathname: forwardTo, hash: withHash }} {...props}>
      {children}
    </XLink>
  );
};

export default Link;
