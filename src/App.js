import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import Maindash from "./Component/Maindash/Maindash";
import Navbar from "./Component/Navbar/Navbar";
import Component from './Component/Componentboard/Component';
import Colors from "./Component/Utility/Colors";
import Borders from "./Component/Utility/Borders";
import Charts from "./Component/Charts/Charts";
import Table from "./Component/Table/Table";
import EditPage from './Component/Userpage/user.Edit';
import RegisterPage from './Component/Userpage/user.register';

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tab } from "bootstrap";
import Buttons from "./Component/Buttons/Buttons";
import Cards from "./Component/Cards/Cards";
import CardsMain from "./Component/Cards/CardsMain";


function App() {
  return (
    <div className="body">
      <div className=" AppGlass">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Maindash/>} />
            <Route path="/dashboard" element={<Maindash />} />
            <Route path='/Navbar' element={<Navbar/>}/>
            {/* <Route path='/Components' element={<Component/>}/> */}
            <Route path='/Buttons' element={<Buttons/>}/>
            <Route path='/Cards' element={<CardsMain/>}/>
            <Route path='/Utilitycolors' element={<Colors/>}/>
            <Route path='/Utilityborders' element={<Borders/>}/>
            <Route path='/Charts' element={<Charts/>}/>
            <Route path='/Table' element={<Table/>}></Route>
            <Route path='/edituser/:id' element={ <EditPage/>}></Route>
            <Route path='/usersignup' element={<RegisterPage/>}></Route>  
         
            {/* <div className='container Mainmenu'>
   
   </div> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
