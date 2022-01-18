const Input = ({ labelText, onChange, inputId, value }) => {
    return <input type="number" id={inputId} value={value} placeholder={ labelText ?? 'Wpisz coś'} onChange={onChange} />
}
export default Input;