import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

import frown from './assets/frown.png';
import triangle from './assets/alert-triangle.png';
import circle from './assets/alert-circle.png';
import checkCircle from './assets/check-circle.png'; 


const primaryColor = "rgb(0, 123, 255)";
const secondaryColor = "rgb(117, 191, 255)";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button backgroundColor = {primaryColor} />
        <Button backgroundColor = {secondaryColor} />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert 
          alertPicture = {frown}
          textAlert={"This is error alert box"} 
          backgroundColor={"#F9C8C8"} />
        <Alert 
          alertPicture = {triangle} 
          textAlert={"This is warning alert box"} 
          backgroundColor={"#F9D9C8"}/>
        <Alert 
          alertPicture = {circle} 
          textAlert={"This is info alert box"}
          backgroundColor={"#F9EBC8"} />
        <Alert 
          alertPicture = {checkCircle} 
          textAlert={"This is success alert box"}
          backgroundColor={"#CEF7CD"} />
      </div>
    </div>
  );
}

export default App;
