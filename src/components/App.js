import Exchanger from '../helpers/Exchanger';
import Header from './/Header'
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header className='header'>Przelicz wybraną walutę na PLN!</Header>
      <Exchanger />
    </div>
  );
}

export default App;
