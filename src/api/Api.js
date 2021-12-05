
import axios from 'axios'



//const axios=require('axios')


export const createMovie=async(id,title, year, duration)=>{
    return await axios.post('http://localhost:3004/movies',
    {
        id:id,
        title: title,
        year: year,
        duration: duration,
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}



export const titleAsMovie=async(id, title, year, duration)=>{
    return await axios.get('http://localhost:3004/movies?',
    {
        params:{
            id:id,
            title:title,
            year:year,
            duration:duration
        }
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
}