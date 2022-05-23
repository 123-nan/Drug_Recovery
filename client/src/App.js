
import Home from './components/Home'
import Register from "./auth/Register";
import Login from "./auth/Login";
import {Switch,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouteForUser from './components/PrivateRoute';
import PrivateRouteForTherapist from './components/PrivateRouteForTherapist';
import DashBoard from './user/Dashboard'
import TherapistDetail from './user/TherapistDetail';
import PrivateRouteForAll from './components/PrivateRouteForAll';
import TherapistDasboard from './user/TherapistDasboard';
import TherapistLogin from './auth/TherapistLogin';
import Schedule from './therapist/schedule';
import About from './components/About';
import AppointmentP from './user/AppointmentP';
import AppointmentT from './user/AppointmentT';

function App() {
  return (
    <>
    <ToastContainer />
    <Navbar title="Cure Street"/>
     <Switch>
      <PrivateRouteForAll exact path="/" component ={Home} />
      <PrivateRouteForAll exact path="/login" component ={Login} />
      <PrivateRouteForAll exact path="/register" component={Register} />
      <PrivateRouteForAll exact path="/therapist-login" component={TherapistLogin} />
      <PrivateRouteForUser exact path="/dashboard" component={DashBoard} />
      <PrivateRouteForUser exact path="/therapist-detail/schedule" component={Schedule} />
      <PrivateRouteForTherapist exact path="/therdashboard" component={TherapistDasboard} />
      <PrivateRouteForUser exact path="/therapist-detail" component={TherapistDetail} />
      <PrivateRouteForUser exact path="/therapist-detail/schedule/:id" component={Schedule} />
      <Route exact path="/about" component={About} />
      <Route exact path="/appointmentp" component={AppointmentP} />  
      <Route exact path="/appointmentther" component={AppointmentT} />

    </Switch>
    </>
  );
}

export default App;





