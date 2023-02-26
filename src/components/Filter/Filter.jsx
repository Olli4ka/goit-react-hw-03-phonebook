
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    
    return (
        <FilterLabel>
            <b>Find contacts by name</b>
            <FilterInput type="text" value={value} onChange={onChange} />
        </FilterLabel>
    )
};


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
