import axios from 'axios'

export const createMovie=async(id, title, year, duration)=>{
    return await axios.post('http://localhost:7001/movies',
    {
        id:id,
        title: title,
        year: year,
        duration: duration,
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))


    
}


export const createShow=async(id, title, year, duration, date, time, roomId, seats)=>{
    return await axios.post('http://localhost:7001/shows',
    {
        id:id,
        title: title,
        year: year,
        duration: duration,
        date: date,
        time:time,
        roomId: roomId,
        seats:seats,
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}

export const titleAsShow=async(id, title, year, duration, date, time, roomId, seats)=>{
    return await axios.get('http://localhost:3004/shows?',
    {
        params:{
            id:id,
            title:title,
            year:year,
            duration:duration,
            date: date,
            time:time,
            roomId:roomId,
            seats:seats
        }
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
}


export const titleAsMovie=async(id, title, year, duration)=>{
    return await axios.get('http://localhost:7001/movies?',
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