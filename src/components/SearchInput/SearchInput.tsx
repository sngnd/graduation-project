import { StyledInput } from "./SearchInputStyles"
import { ISearchInputProps } from "./types"

const SearchInput = ({value, onChange, className}:ISearchInputProps) => {
    return (
        <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        className={className}
      />
    )
};

export default SearchInput;
