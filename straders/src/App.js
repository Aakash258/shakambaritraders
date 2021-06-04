import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home'
import AboutUs from './components/screens/AboutUs'
import ContactUs from './components/screens/ContactUs'
import Products from './components/screens/Products'

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/AboutUs">
    <AboutUs /> 
    </Route>
    <Route path="/ContactUs">
    <ContactUs /> 
    </Route>
    <Route path="/Products">
    <Products /> 
    </Route>
   </BrowserRouter>
  );
}

export default App;

######
Code of no use