const BookingCard =({day,list}) =>{
       

    console.log(day,list);
  
    return (<>
        <div className="col-sm-6 p-3 text-center">
   <div className="card" style={{width: '18rem'}}>

   <h1>{day}</h1>

  <ul className="list-group list-group-flush">

    {list!=null &&  list.map((list) =><li className="list-group-item">{list}</li>)}

  </ul>
  </div>
  </div>

    </>)
}

export default BookingCard;