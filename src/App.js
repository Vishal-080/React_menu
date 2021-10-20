import {Button} from './Components/Button';
import "./App.css";

function App() {
  return (<div id="container">
    <div id="left">
    <Button title="JOIN US" clr="rgb(0, 183, 255)"/>
    <Button title="LOGIN" clr="orange"/>
    <Button title="SEARCH" clr="limegreen"/>
    <Button title="HOME" clr="rgb(255, 65, 207)"/>
    </div>
    <div id="right">
    <Button title="SETTINGS" clr="lightblue"/>
    <Button title="CONTACT US" clr="rgb(216, 56, 56)"/>
    <Button title="HELP" clr="indigo"/>
    <Button title="DOWNLOAD" clr="rgb(230, 215, 15)"/>
    </div>
  </div>
  );
  
}

export default App;
