import React from "react";
import { Button } from "react-bootstrap"
import { confirmAlert } from "react-confirm-alert"
import { Navigate } from "react-router-dom"
import Shows from "./components/Shows";


class AddShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            year: '',
            duration: '',
            roomId: 0,
            showDate: '',
            hour: 0,
            minute: 0,
            selectMovieId: 0,
            redirect: false
        }
    }

    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }

    add = () => {
        const { addShow, moviesList } = this.props
        const { showDate, hour, minute, roomId, selectMovieId } = this.state
        
        const body = {
            movieId: selectMovieId,
            title: moviesList[selectMovieId].title,
            year: moviesList[selectMovieId].year,
            duration: moviesList[selectMovieId].duration,
            date: showDate,
            hour: hour,
            minute: minute,
            roomId: roomId
        }

        addShow(body)
        this.setState({
            redirect: true
        })
    }

    // validateShow() {
    //     const { showsList } = this.props
    //     const { title, selectMovieId, showDate, hour, minute } = this.state
    //     let showTime = hour + ":" + minute

    //     if((title === null || showsList.includes((show) => {
    //         show.title === title && (new Date(showDate)) === (new Date(show.showDate))
    //     })))
    //     {
            
    //     }

    // }

    render() {
        const { redirect } = this.state
        const { moviesList, roomsList } = this.props
        
        let today = new Date()
        
        let todayYear = today.getFullYear()
        let todayMonth = today.getMonth() + 1
        let todayDay = today.getDate()

        if(todayDay < 10)
            todayDay = '0' + todayDay

        if(todayMonth < 10)
            todayMonth = '0' + todayMonth

        let todayDate = todayYear + "-" + todayMonth + "-" + todayDay
        let maxDate = (todayYear + 1) + "-" + todayMonth + "-" + todayDay

        var hourList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        var minuteList = [0, 15, 30, 45]

        if (redirect === true)
            return <Navigate to="/allShows"/>

        return (
            <div class="addShow">
               <p>Dodaj nowy seans</p>
                {/* <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/> */}
                <label>
                    Film:
                    <select id="selectMovieId" onChange={(e) => this.onChange(e)}>
                        {moviesList.map((movie, key) => {
                            return (
                                <option value={key}>{movie.title}</option>
                            )
                        })}
                    </select>
                </label>
                
                <label>
                    Data:
                    <input type="date" id="showDate" min={todayDate} max={maxDate} onChange={(e) => this.onChange(e)}/>
                </label>

                <label>
                    Godzina:
                    <select id="hour" onChange={(e) => this.onChange(e)}>
                        {hourList.map((key) => {
                            return (
                                <option value={key}>{key}</option>
                            )
                        })}
                    </select>

                    <select id="minute" onChange={(e) => this.onChange(e)}>
                        {minuteList.map((key) => {
                            return (
                                <option value={key}>{key}</option>
                            )
                        })}
                    </select>
                    {/* <input type="time" id="showTime" onChange={(e) => this.onChange(e)}/> */}
                </label>
                
                <label>
                    Sala:
                    <select id="roomId" onChange={(e) => this.onChange(e)}>
                        {roomsList.map((room, key) => {
                            return (
                                <option value={key}>Sala nr {key}, liczba miejsc: {room.rows * room.seatsInRow}</option>
                            )
                        })}
                    </select>
                </label>
                

                {/* <input type="text" placeholder="Sala" id="roomId" onChange={(e) => this.onChange(e)}/> ZAMIAST TEGO MA BYĆ SELECT!!! */}
                
                <Button variant="secondary" onClick={this.add}>Dodaj seans</Button>
            </div>
        )
    }
}

export default AddShow