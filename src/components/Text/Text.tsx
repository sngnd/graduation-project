import { ITextProps } from "./types";
import { StyledP, StyledH1 } from "./TextStyles";

const Text = ({
  children,
  className,
  color = "white",
  variant = "p",
}: ITextProps) => {
  return variant === "h1" ? (
    <StyledH1 color={color}>{children}</StyledH1>
  ) : (
    <StyledP color={color} className={className}>
      {children}
    </StyledP>
  );
};

export default Text;
