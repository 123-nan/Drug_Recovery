import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteForTherapist = ({...rest}) => {
    const {user} = useSelector((state) => ({...state}));

    let flag = false;
    
    
    if(user == null)
    return false?<Route {...rest} /> : <Redirect to="/login"/>;
    else if(user.u == "therapist")
    return true?<Route {...rest} /> : <Redirect to="/dashboard"/>;
    else
    return false?<Route {...rest} /> : <Redirect to="/dashboard"/>;

};

export default PrivateRouteForTherapist;