import { Option } from ".";

const Select = ({ onSelectChange, selectValue }) => {
    return <select value={selectValue} onChange={ onSelectChange }>
            <Option> - </Option>
            <Option optionValue = "option_1"> Frank szwajcarski </Option>
            <Option optionValue = "option_2"> Euro </Option>
            <Option optionValue = "option_3"> Dolar amerykański </Option>
    </select>
}
export default Select;