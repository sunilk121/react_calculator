
import './App.css';
import {Display} from "./components/Display"
import {Title} from './components/Title'
import {CalculatorFrame} from './components/CalculatorFrame'

function App() {
  return(
  <div>
   <div className="wrapper">
     <Title/>
     <CalculatorFrame/>
   </div>
  </div>) 
    
  
}

export default App;
