import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/menu' element={ <><Menu/></>}/>
        <Route path='/about' element={ <><About/></>}/>
        <Route path='/contact' element={ <><Contacts/></>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
