// import Login from '../src/session/admin/pages/auth/login';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Adminloginpage from './session/admin/pages/auth/login';
import Admindashboard from './session/admin/pages/dashboard';
import Create from './session/admin/pages/seller/create';
import Display from './session/admin/pages/seller/display';
import Updateseller from './session/admin/CRUD/Updateseller';
import Deleteseller from './session/admin/CRUD/Deleteseller';
import Detailsseller from './session/admin/CRUD/Detailsseller';
// seller
import SellerLogin from './session/seller/pages/auth/sellerLogin';
import Sellerdashboard from './session/seller/Sellerdashboard';
import Createproducts from './session/seller/pages/seller/createproducts';
import Displayproduct from './session/seller/pages/seller/displayproduct';

///User

import Indexpage from './session/user/indexpage';
import UserLogin from './session/user/pages/auth/UserLogin';
import Userregister from './session/user/pages/auth/Userregister';
import Home from './session/user/pages/products/home';
import Quatation from './session/user/pages/products/Quatationpage';


function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
                  {/* admin */}
            <Route exact path='/' element={<Adminloginpage/>}/>
            <Route exact path='/api/'element={<Adminloginpage/>}/>
      
            <Route exact path='/adminloginpage' element={<Adminloginpage/>}/>
            <Route exact path='/admindashboard/' element={<Admindashboard/>}/>
            <Route exact path='/Create/new' element={<Create/>}/>
            <Route exact path='/seller/Display' element={<Display/>}/>
            <Route exact path='/seller/:_id/edit' element={<Updateseller/>}/>
            <Route exact path='/seller/:_id/delete' element={<Deleteseller/>}/>
            <Route exact path='seller/:_id' element={<Detailsseller/>}/>



                  {/*     SellerRoutes */}
            <Route exact path='/seller' element={<SellerLogin/>}/>
            <Route exact path='/api/seller' element={<SellerLogin/>}/>
            <Route exact path='/sellerdashboard' element={<Sellerdashboard/>}/>
            <Route exact path='/products' element={<Createproducts/>}/>
            <Route exact path='/products/display/' element={<Displayproduct/>}/>



                  {/* Userinterface */}
            <Route exact path='/indexpage' element={<Indexpage/>}/>
            <Route exact path='/userLogin' element={<UserLogin/>}/>
            <Route exact path='/userRegister' element={<Userregister/>}/>
            <Route exact path='/Home' element={<Home/>}/>
            <Route exact path='/Quatation' element={<Quatation/>}/>


      </Routes>



</BrowserRouter>
    </div>
  );
}

export default App;
