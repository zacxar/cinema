import axios from 'axios'



const url = 'http://localhost:3004/'
//movie


export const createMovie=async(movie)=>{
    return await axios.post(url+'movies',
    {
       // id:movie.id,
        title : movie.title,
        year :movie.year,
        duration : movie.duration
        
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))  
}

export const getMovie=async()=>{
    let data=[]
    await axios.get(url+'movies').then((response)=>{
        data=response.data}).catch((error)=>{
        return error})
        return data
}

export const deleteM=async(id)=>{
    console.log(id)
return await axios.delete(url+'movies/'+id)
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}

export const editM=async(movie)=>{
    return await axios.put(url+'movies/'+movie.id, movie)
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}

//show
export const createShow=async(show)=>{
    return await axios.post(url+'shows',
    {
       // id:movie.id,
        title : movie.title,
        year :movie.year,
        duration : movie.duration,
        date: show.date,
        time: show.time,
        roomId: show.roomId,
        seats: show.seats
        
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))  
}
export const getShow=async()=>{
    let data=[]
    await axios.get(url+'shows').then((response)=>{
        data=response.data}).catch((error)=>{
        return error})
        return data
}

export const deleteS=async(id)=>{
    console.log(id)
return await axios.delete(url+'shows/'+id)
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}
export const editS=async(show)=>{
    return await axios.put(url+'shows/'+show.id, show)
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}
