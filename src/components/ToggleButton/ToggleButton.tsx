import { StyledToggleButton } from "./ToggleButtonStyles";
import { IToggleButtonProps } from "./types";

const ToggleButton = ({ className, onClick, active }: IToggleButtonProps) => {
  return (
    <StyledToggleButton
      className={className}
      onClick={onClick}
      active={active}
    ></StyledToggleButton>
  );
};

export default ToggleButton;
