import react from 'react'
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';

const url = 'https://restcountries.com'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
