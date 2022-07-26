import './App.css';

import Login from './components/Login';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Country from './components/Countries';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Country />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;