import './App.css';
import Slider from './Components/Slider/Slider';
// import pink1 from './assets/images/pink1.jpg'
// import pink2 from './assets/images/pink2.jpg'
// import pink3 from './assets/images/pink3.jpg'
// import pink4 from './assets/images/pink4.jpg'
import {data} from './Data.js'
function App() {



  return (
    <div className="App">
      <Slider  data ={data}/>
          </div>
  );
}

export default App;
