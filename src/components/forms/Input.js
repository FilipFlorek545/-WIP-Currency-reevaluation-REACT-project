const Input = ({ labelText, onChange }) => {
    return <input type="number" placeholder={ labelText ?? 'Wpisz coś'} onChange={onChange} />
}
export default Input;