import Home from './routes/Home'
import Register from "./auth/Register";
import Login from "./auth/Login";
import {Switch,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar'
import PdfGenerator from './therapist/pdfgenerator';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouteForUser from './components/PrivateRoute';
import PrivateRouteForTherapist from './components/PrivateRouteForTherapist';
import DashBoard from './user/Dashboard'
import TherapistDetail from './therapist/TherapistDetail';
import PrivateRouteForAll from './components/PrivateRouteForAll';
import TherapistDasboard from './therapist/TherapistDasboard';
import PrivateRouteForNone from './components/PrivateForNone';
import TherapistLogin from './auth/TherapistLogin';
import Schedule from './therapist/schedule';
import About from './routes/About';
import AppointmentP from './user/AppointmentP';
import AppointmentT from './therapist/AppointmentT';
import ChatRoom from './therapist/chatroom';
import Joinroom from './therapist/joinroom';
import Testimonial from './components/Testimonial';
import Contact from './routes/Contact';
import Blog from './routes/Blogs';


function App() {
  return (
    <>
    <ToastContainer />
    <Navbar title="Cure Street"/>
     <Switch>
      <Route exact path="/" component ={Home} />
      <PrivateRouteForAll exact path="/login" component ={Login} />
      <PrivateRouteForAll exact path="/register" component={Register} />
      <PrivateRouteForAll exact path="/therapist-login" component={TherapistLogin} />
      <PrivateRouteForNone exact path="/joinroom/:id" component ={Joinroom} />
      <PrivateRouteForNone exact path="/chat-room/:id" component ={ChatRoom} />
      <PrivateRouteForUser exact path="/dashboard" component={DashBoard} />
      <PrivateRouteForUser exact path="/therapist-detail/schedule" component={Schedule} />
      <PrivateRouteForTherapist exact path="/therdashboard" component={TherapistDasboard} />
      <Route exact path="/generate-report/:id" component={PdfGenerator} />
      <PrivateRouteForUser exact path="/therapist-detail" component={TherapistDetail} />
      <PrivateRouteForUser exact path="/therapist-detail/schedule/:id" component={Schedule} />
      <Route exact path="/about" component={About} />
      <Route exact path="/patient-appointment" component={AppointmentP} />  
      <Route exact path="/therapist-appointment" component={AppointmentT} />
      <Route exact path="/testimonial" component={Testimonial} />
      <Route exact path="/contact" component={Contact} />
      
    </Switch>
    </>
  );
}

export default App;





