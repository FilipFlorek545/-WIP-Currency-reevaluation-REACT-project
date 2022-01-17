import Exchanger from '../helpers/Exchanger';
import Header from './/Header'

function App() {
  return (
    <div className="App">
      <Header>Przelicz wybraną walutę na PLN!</Header>
      <Exchanger />
    </div>
  );
}

export default App;
