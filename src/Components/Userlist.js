import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userlist() 
{
    const[arr ,setarr]=useState([])
   
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then (function(response){
            // handle sucess
             console.log(response.data);
             setarr(response.data)
            })
            .catch(function (error){
                // handle error
                   console.log(error)
      
    }, [])

})
 
  return (
    <div>
 <table>
    <tr>
        <th>name</th>
        <th>ysername</th>
        <th>email</th>


    </tr>
    {arr.map(el=><tr>

               <td>{el.name}</td>
               <td>{el.username}</td>
               <td>{el.name}</td>


    </tr>)}
 </table>



    </div>
  )
}

export default Userlist