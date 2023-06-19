import { Route,Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navhead from './Component/Navhead';
import Navbar2 from './Component/Navbar2'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Dashbord from './Pages/Dashbord';
import Useauth from './Pages/Useauth';
import Mystory from './Pages/Mystories.jsx';
import CreateStory from './Pages/CreateStory';
import Footer from './Component/footer'
import Edit from './Pages/Edit';
import SingleStory from './Pages/SingleStory';
import AllUsersStory from './Pages/AllUsersStory';



function App() {
  return (
    <>
    <Routes>
    <Route path='/signup'element={<SignUp/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/'element={<Home/>}/>
    <Route element={<Useauth/>}>
    <Route path='/Dashboard'element={<Dashbord/>}/>
    <Route path='/Mystory'element={<Mystory/>}/>
    <Route path='/CreateStory'element={<CreateStory/>}/>
    <Route path='/Edit/:id' element={<Edit/>}/>
    <Route path='/Allstory'element={<AllUsersStory/>}/>
    <Route path='/Single/:id'element={<SingleStory/>}/>
      </Route>
      
      <Route path = '*' element = {<div>ERROR ROUTE</div>}/>
    </Routes>
   
   
    </>
  )
};
export default App;
