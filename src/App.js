import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewDonor from './components/ViewDonor';
import Search from './components/Search';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<Login/>}/>
  <Route path='/register' exact element={<Register/>}/>
  <Route path='/search' exact element={<Search/>}/>
  <Route path='/view' exact element={<ViewDonor/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
