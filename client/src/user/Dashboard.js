import { useSelector,userSelector,useStore } from "react-redux"

const DashBoard =() =>{

    const {user}= useSelector((state) => ({...state}));


    return (
        <h1>dashboard

            {JSON.stringify(user)}
        </h1>
    )
}
export default DashBoard