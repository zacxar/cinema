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
            date: '',
            roomId: '',
            showDate: '',
            showTime: '',
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
        const { showDate, showTime, roomId, selectMovieId } = this.state

        const body = {
            title: moviesList[selectMovieId].title,
            year: moviesList[selectMovieId].year,
            duration: moviesList[selectMovieId].duration,
            date: showDate,
            time: showTime,
            roomId: roomId
        }

        addShow(body)
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state
        const { moviesList } = this.props
        
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

        if (redirect === true)
            return <Navigate to="/allShows"/>

        return (
            <div>
               <p>Dodaj nowy seans</p>
                {/* <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/> */}

                <select id="selectMovieId" onChange={(e) => this.onChange(e)}>
                    {moviesList.map((movie, key) => {
                        return (
                            <option value={key}>{movie.title}</option>
                        )
                    })}
                </select>

                <input type="date" id="showDate" value={todayDate} min={todayDate} max={maxDate} onChange={(e) => this.onChange(e)}/>
                <input type="time" id="showTime" onChange={(e) => this.onChange(e)}/>
                
                <input type="text" placeholder="Sala" id="roomId" onChange={(e) => this.onChange(e)}/> {/* ZAMIAST TEGO MA BYĆ SELECT!!! */}
                
                <Button variant="secondary" onClick={this.add}>Dodaj seans</Button>
            </div>
        )
    }
}

export default AddShow