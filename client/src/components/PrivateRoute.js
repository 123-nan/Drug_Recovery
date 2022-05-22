import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteForUser = ({...rest}) => {
    const {user} = useSelector((state) => ({...state}));

    let flag = false;
    const tp = user.u;
    const typ = "patient";
    
    if(user == null)
    return false?<Route {...rest} /> : <Redirect to="/login"/>;
    else if(user.u == "therapist")
    return false?<Route {...rest} /> : <Redirect to="/therdashboard"/>;
    else
    return true?<Route {...rest} /> : <Redirect to="/login"/>;

};

export default PrivateRouteForUser;