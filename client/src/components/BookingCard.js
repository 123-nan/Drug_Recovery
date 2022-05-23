import {useSelector} from 'react-redux'
import { bookingSchedule } from '../actions/auth';

const BookingCard =({day,list,uuid,tname}) =>{
       

    console.log(day,list);

    const {user} = useSelector((state) =>({...state}));

    const puid = user.user._id;
    const pname = user.user.name;

    console.log(tname);

    const handleClick = async (e)=>{
      console.log(e.target.innerText);
      console.log(day);
      console.log(uuid);
      console.log(puid);
      const detail = e.target.innerText;
      const time=detail+":"+new Date().getDate() + ":" + new Date().getMonth()+":"+new Date().getFullYear();
      const status = false;
      const data = await bookingSchedule({time,status,uuid,puid,pname,tname});
     
    }
  
    return (<>
        <div className="col-sm-6 p-3 text-center">
   <div className="card" style={{width: '18rem'}}>

   <h1>{day}</h1>

  <ul className="list-group list-group-flush">

    {list!=null &&  list.map((list) =><li className="list-group-item" onClick={handleClick}>{list}</li>)}

  </ul>
  </div>
  </div>

    </>)
}

export default BookingCard;