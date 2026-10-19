import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Events from './pages/Events';
import Deities from "./pages/Deities";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/events' element = {<Events/>} />
          <Route path='/deities' element = {<Deities />} />
          <Route path='/gallery' element = {<Gallery />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App