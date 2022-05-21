
import Home from './components/Home'
import Register from "./auth/Register";
import Login from "./auth/Login";
import {Switch,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import DashBoard from './user/Dashboard'
import TherapistDetail from './user/TherapistDetail';

function App() {

  return (

    <>
    <ToastContainer />
    <Navbar title="Cure Street"/>
     <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/login" component ={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={DashBoard} />
      <PrivateRoute exact path="/therapist-detail" component={TherapistDetail} />
    </Switch>
    </>
  );
}

export default App;





