import axios from 'axios';
import { useEffect, useState } from 'react';
import { Select, Input, Button, Result } from '../components/forms';
import { Watch } from 'react-loader-spinner';
const Exchanger = () => {
    const [revalue, setRevalue] = useState('null')
    const [valueOfInput, setValueOfInput] = useState('');
    const [valueOfSelect, setValueOfSelect] = useState('');
    const [isLoading, setIsLoading] = useState('false')
    const [resultContent, setResultContent] = useState(' ')
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
                        setResultContent(`Wynosi to ${result} PLN!`);
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
                    setResultContent(`Wynosi to ${result} PLN!`);
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
                    setResultContent(`Wynosi to ${result} PLN!`);
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
        setValueOfInput('');
        setValueOfSelect(() => '');
    }
    return(
        <>
        <Input 
        inputId='numberId'
        labelText='Ilość'
        onChange={ handleInputChange }
        value={ valueOfInput }
        />
        <Select selectValue={ valueOfSelect } onSelectChange={ handleSelectChange } /> 
        <Button onClick={handleClick}>Klik!</Button>
        <div id='loaderid'>
        {!isLoading && <Watch
            height='30'
            width='30'
        />}
        </div>
        <Result resultId='result'>{resultContent}</Result>
        </>
    )
}    
export default Exchanger;