import './App.css';
import Navbar from './Component/Navbar';
import ChangeState from './Component/Solutions/ChangeState';
import Togglebtn from './Component/Solutions/Togglebtn';
import RulesHooks from './Component/Solutions/RulesHooks';
import Arraystate from './Component/Solutions/Arraystate';
import UsestateObject from './Component/Solutions/UsestateObject';
import Todo from './Component/Todo/Todo';
import Shortcircuitevalu from './Component/Solutions/Shortcircuitevalu';
import Login from './Component/Form/Login';
import Login2 from './Component/Form/Login2';
import Useeffect from './Component/UseEffenct/Useeffect';
import Useeffect2 from './Component/UseEffenct/Useeffect2';
import Cleanupfunction from './Component/UseEffenct/Cleanupfunction';
import Usefectapi from './Component/UseEffenct/Usefectapi';
import Usefectapi2 from './Component/UseEffenct/UseFectapi2';
import Uncontrolform from './Component/Form/Uncontrolform';
import AddSub from './Component/Hooks/AddSub';
import UseRefHooks from './Component/Hooks/UseRefHooks';
import UseReducer1 from './Component/Hooks/UseReducerHooks';
import UseReducer2 from './Component/Hooks/UseReducerHooks2';
import UseContextHooks from './Component/UseContext/UseContextHooks';
import UseContextHooks2 from './Component/UseContext/UseContextHooks2';
import UseContextHooks3 from './Component/UseContext/UseContextHooks3';
import CustomeHooks from './Component/Hooks/CustomeHooks';
import Aboutus from './Component/Aboutus';
import Toastify from './Component/Form/Toastify';
import Todo1 from './Component/Todo/Todo1';
import Todo2 from './Component/Todo/Todo2';
import Todo3 from './Component/Todo/Todo3';
import UseCallbackHooks from './Component/Hooks/UseCallbackHooks';
import UseCallbackHooks4 from './Component/Hooks/UseCallbackHooks4';
import UseMemoHook from './Component/Hooks/UsememoHook';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Reduxapp from './Component/Redux/Js/Reduxapp';

const App = () =>{
 
  return (
    <div>
      <Router>
        <Navbar/>

        <Routes>
        <Route  path="/todo" element={<Todo/>} />
        <Route  path="/todo1" element={<Todo1/>} />
        <Route  path="/todo2" element={<Todo2/>} />
        <Route  path="/" element={<Todo3/>} />
        

        <Route  path="/aboutus" element={<Aboutus/>} />
        <Route  path="/changestate" element={<ChangeState/>} />
        <Route  path="/togglebutton" element={<Togglebtn/>} />
        <Route  path="/rules" element={<RulesHooks/>} />
        <Route  path="/array" element={<Arraystate/>} />
        <Route  path="/usestateobject" element={<UsestateObject/>} />
        <Route  path="/shoercircuitevalation" element={<Shortcircuitevalu/>} />

        <Route  path="/Login" element={<Login/>} />
        <Route  path="/Login2" element={<Login2/>} />
        <Route  path="/uncontrol" element={<Uncontrolform/>} />
        <Route  path="/toastify" element={<Toastify/>} />
        
        <Route  path="/useeffect1" element={<Useeffect/>} />
        <Route  path="/useeffect2" element={<Useeffect2/>} />
        <Route  path="/cleanupfunction" element={<Cleanupfunction/>} />
        <Route  path="/usefectapi" element={<Usefectapi/>} />
        <Route  path="/usefectapi2" element={<Usefectapi2/>} />
        

        <Route  path="/UseRefHooks" element={<UseRefHooks/>} />
        <Route  path="/UseRducerHooks" element={<UseReducer1/>} />
        <Route  path="/UseRducerHooks2" element={<UseReducer2/>} />
        <Route  path="/AddSub1" element={<AddSub/>} />
        <Route  path="/CustomeHooks" element={<CustomeHooks/>} />
        <Route  path="/useCallbackHook1" element={<UseCallbackHooks/>} />
        <Route  path="/useCallbackHook4" element={<UseCallbackHooks4/>} />
        <Route  path="/usememohook" element={<UseMemoHook/>} />

        <Route  path="/UseContextHooks" element={<UseContextHooks/>} />
        <Route  path="/UseContextHooks2" element={<UseContextHooks2/>} />
        <Route  path="/UseContextHooks3" element={<UseContextHooks3/>} />

        <Route  path="/redux1" element={<Reduxapp/>} />

        </Routes> 
      </Router>
    </div>
  );

}

export default App;
