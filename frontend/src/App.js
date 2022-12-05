
import './App.css';
import Home from './Components/home';
import About from './Components/about';
import Service from './Components/service';
import Products from './Components/products';
import Delivery from './Components/delivery';

function App() {
  return (
    <div className="App">
      <h1>BEVERLY SPICES</h1>
      <Home/>
      <About/>
      <Service/>
      <Products/>
      <Delivery/>
    </div>
  );
}

export default App;
