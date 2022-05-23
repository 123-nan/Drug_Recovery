import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteForNone= ({...rest}) => {
    const {user} = useSelector((state) => ({...state}));

    
    
    
    if(user == null)
    return false?<Route {...rest} /> : <Redirect to="/login"/>;
    else if(user.u == "therapist")
    return true?<Route {...rest} /> : <Redirect to="/therdashboard"/>;
    else
    return true?<Route {...rest} /> : <Redirect to="/dashboard"/>;

};

export default PrivateRouteForNone;