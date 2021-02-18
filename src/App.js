// import Searchbar from "./Searchbar";
import Salutation from "./Salutation";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Opensource from "./Opensource";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <div class="container padding50">
        <Weather defaultCity="Sydney" />
        <Forecast />
        <Opensource />
      </div>
    </div>
    </div>
  );
}
