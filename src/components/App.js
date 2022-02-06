import Exchanger from '../helpers/Exchanger';
import Header from './/Header'
import "./App.css"
import Logo from './/forms/logo.png'
function App() {
  return (
    <div className="App">
      <img id='logo' src={Logo}/>
      <Header classHeader='header'>Przelicz wybraną walutę na PLN!</Header>
      <Exchanger />
    </div>
  );
}

export default App;
