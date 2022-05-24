import {useSelector} from 'react-redux'
import '../styles/Navbar.css'
import { bookingSchedule } from '../actions/auth';
import { toast } from 'react-toastify';

const BookingCard =({day,list,uuid,tname}) =>{
       

    console.log(day,list);

    const {user} = useSelector((state) =>({...state}));
    
    const puid = user.user._id;
    const pname = user.user.name;

    const daylist = ["monday","tuesday","wednesday","thrusday","friday","saturday","sunday"];

   
    let flag = new Date(Date.now()).getDay() - 1;
    
    
    

    const handleClick = async (e)=>{

      if(!(daylist[flag] == day))
      {
        toast.dark("Only todays booking allowed");
        return;
      }
      const detail = e.target.innerText;

      const currentTime = new Date(Date.now()).getHours() + ":"+ new Date(Date.now()).getMinutes();

      if(currentTime == detail)
      console.log("Time match");
      else if(currentTime > detail)
      { toast.dark(`Booking Allowed after ${currentTime}`);   return;}
      


     

      var month = new Date().getMonth();
      if(month <= 9)
      month = "0"+month;
      
      const time=detail.substring(0,5)+":"+new Date().getDate() + ":" + month+":"+new Date().getFullYear();
      const status = false;
      console.log(time);
      try{
      const data = await bookingSchedule({time,status,uuid,puid,pname,tname});
      toast.success("Booked");
      
      }
      catch(err)
      {
        toast.dark(err.message);
      }
    }


    return (<>
        <div className="col-sm-3 p-3 text-center ">
   <div className="card background-cadet" style={{width: '18rem'}}>

   {daylist[flag] == day ?<h1 className='text-sans text-success'>{day.charAt(0).toUpperCase() + day.slice(1)}</h1>:<h1 className='text-white text-sans'>{day.charAt(0).toUpperCase() + day.slice(1)}</h1>}

  <ul className="list-group list-group-flush">

    {list!=null &&  list.map((list) =><li className="list-group-item cursor" onClick={handleClick}>{(list[0] >= '1' && list[1] >= '2')||(list[0]>=2)?list+" PM":list+" AM"}</li>)}

  </ul>
  </div>
  </div>

    </>)
}

export default BookingCard;