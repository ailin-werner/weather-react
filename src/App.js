import logo from './logo.svg';
import './App.css';
import Searchbar from "./Searchbar";
import Button from "./Button";
import Salutation from "./Salutation";
import Date from "./Date";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Opensource from "./Opensource";


function App() {
  return (
    <div className="App">
      <div class="container padding50">
        <Searchbar />
        <Button />
        <Salutation />
        <Date />
        <Weather />
        <Forecast />
        <Opensource />
      </div>
    </div>
  );
}

export default App;
