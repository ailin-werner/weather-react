
import Weather from "./Weather";
import Opensource from "./Opensource";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="padding50">
        <Weather defaultCity="Sydney" />
        {/* <Forecast /> */}
        <Opensource />
      </div>
    </div>
    </div>
  );
}
