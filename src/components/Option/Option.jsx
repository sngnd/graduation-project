import { RadioInput, StyledOption } from "./OptionStyles";

const Option = ({ option, onChange, selectedSize }) => {
  return (
    <StyledOption
      key={option + new Date().getMilliseconds()}
      selectedSize={selectedSize}
      option={option}
    >
      <label htmlFor={option}>
        <RadioInput
          name="size"
          type="radio"
          id={option}
          value={option}
          onChange={onChange}
          checked={selectedSize === `${option}`}
        />
        {option}
      </label>
    </StyledOption>
  );
};

export default Option;
