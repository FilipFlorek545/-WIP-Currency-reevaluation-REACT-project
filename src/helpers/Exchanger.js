import { render } from '@testing-library/react';
import axios from 'axios';
import { useState } from 'react';
import { Select, Input, Button, Result } from '../components/forms';
import { Oval } from 'react-loader-spinner';
const Exchanger = () => {
    const [revalue, setRevalue] = useState('null')
    const [valueOfInput, setValueOfInput] = useState('');
    const [valueOfSelect, setValueOfSelect] = useState('');
    const [isLoading, setIsLoading] = useState('false')
    const handleClick = () => {
        switch (valueOfSelect) {
            case 'option_1':
                setIsLoading(false);
                axios.get('http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json')
                .then((response) => {
                        const revalue = response.data.rates[0].mid;
                        setIsLoading(false);
                        setRevalue(revalue);
                        let result = valueOfInput * revalue;
                        result = result.toFixed(2);
                        setIsLoading(true)
                        render(
                            <Result>Wynosi to {result} PLN!</Result>
                        )
                        clearInputs();
                })
                break;
            case 'option_2':
                setIsLoading(false);
                axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json')
                .then((response) => {
                    const revalue = response.data.rates[0].mid;
                    setRevalue(revalue);
                    let result = valueOfInput * revalue;
                    result = result.toFixed(2);
                    setIsLoading(true)
                    render(
                        <Result>Wynosi to {result} PLN!</Result>
                    )
                    clearInputs();
                })
                break;
            case 'option_3':
                setIsLoading(false);
                axios.get('http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json')
                .then((response) => {
                    const revalue = response.data.rates[0].mid;
                    setRevalue(revalue);
                    let result = valueOfInput * revalue;
                    result = result.toFixed(2);
                    setIsLoading(true);
                    render(
                        <Result>Wynosi to {result} PLN!</Result>
                    )
                    clearInputs();
                })
                break;
            default:
                alert('Błędnie uzupełniono przelicznik!')
                break;
        }
    }
    
    const handleInputChange = (event) => {
        setValueOfInput(event.target.value);
    }
    const handleSelectChange = (event) => {
        setValueOfSelect(event.target.value);
    }
    const clearInputs = () => {
        setValueOfInput(() => '');
        setValueOfSelect(() => '');
    }
    return(
        <>
        <Input 
        labelText= 'Ilość'
        onChange= { handleInputChange }
        value = { valueOfInput }
        />
        <Select selectValue={ valueOfSelect } onSelectChange={ handleSelectChange } /> 
        <Button onClick={handleClick}>Klik!</Button>
        {!isLoading && <Oval />}
        </>
    )
}    
export default Exchanger;