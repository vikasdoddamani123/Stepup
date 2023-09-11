// import Login from '../src/session/admin/pages/auth/login';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Adminloginpage from './session/admin/pages/auth/login';
import Admindashboard from './session/admin/pages/dashboard';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
            <Route exact path='/adminloginpage' element={<Adminloginpage/>}/>
            <Route exact path='/admindashboard/' element={<Admindashboard/>}/>

      </Routes>



</BrowserRouter>
    </div>
  );
}

export default App;
