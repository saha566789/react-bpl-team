import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Home = () => {
 const [allActors,setAllActors] =useState([])

 const [selectActors,setSelectedActors] = useState([])
 const [remaining,setRemaining] = useState(0)
 const [totalCost,setTotalCost] = useState(0)
  useEffect(()=>{
       fetch('./data.json')
       .then(res =>res.json())
       .then(data => setAllActors(data))
  },[])

   const handleSelectActor = (actor) =>{
    const isExist = selectActors.find((item) => item.id == actor.id) 

    let count = actor.salary;
   if(isExist){
   return alert("already booked")
   }
   else{

    selectActors.forEach((item) =>{
        count = count + item.salary;
    });
   const totalRaemining = 20000 - count;
   if(count > 20000){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
   }
   else{
    setTotalCost(count)
   setRemaining(totalRaemining)
    setSelectedActors([...selectActors,actor])
   }
   }

   
   }
     console.log(selectActors)
    return (
        <div className='container'> 
            <div className="home-container">
             <div className="card-container">
             {
                  allActors.map((actor,idx) =>(
                  <div key={idx} className="card">
                  <div className="card-img">
                   <img className='photo' src={actor.image} alt="" />
                  </div>
                  <h2>{actor.name}</h2>
                  <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ea!</small></p>
                  <div className="info">
                   <p>Salary: ${actor.salary}</p>
                   <p>{actor.role}</p>
                  </div>
                  <button onClick={()=>handleSelectActor(actor)} className='card-btn'>select</button>
           </div>))

             }
             </div>  
                <div className='cart'>
                <Cart selectActors={selectActors}
                remaining={remaining}
                totalCost={totalCost}></Cart>
           </div>
            </div>
          
        </div>
    );
};

export default Home;