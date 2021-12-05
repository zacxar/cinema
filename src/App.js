import React from "react"
import Movies from "./components/Movies"
import { confirmAlert } from "react-confirm-alert"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Navbar from "./Navbar"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AddMovie from "./AddMovie";
import MovieClass from "./class/MovieClass";
import Shows from "./components/Shows";
import AddShow from "./AddShow";
import ShowClass from "./class/ShowClass"
import Room from "./components/Room"
import Rooms from "./components/Rooms"
import RoomClass from "./class/RoomClass"
import { createMovie } from "./api/Api";
import {createShow} from "./api/Api"
// import "./styles/app.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList : [
                new MovieClass(1, "Terminator", 1980, 120),
                new MovieClass(2, "Indiana Jones", 1985, 124)
            ],

            showsList : [
            ],

            roomsList : [
                new RoomClass(0, 10, 10),
                new RoomClass(1, 12, 10),
                new RoomClass(2, 10, 10),
                new RoomClass(3, 10, 10)
            ]
        }

        this.state.showsList.push(new ShowClass(0, this.state.moviesList[0].title, this.state.moviesList[0].year, this.state.moviesList[0].duration, "2021-12-05", "20:00", 0, 10 * 10))
    }

    createNotification(message) {
        NotificationManager.success('Success', message);
    }

    calculateMovieId() {
        const { moviesList } = this.state
        let maxId = 0

        if(moviesList.length > 0) {
            moviesList.forEach((movie) => {
                if(movie.id >= maxId)
                    maxId = movie.id
            })
        }
        this.setState({
            lastMovieId: maxId + 1
        })
    }

    calculateShowId() {
        const { showsList } = this.state
        let maxId = 0

        if(showsList.length > 0) {
            showsList.forEach((show) => {
                if(show.id >= maxId)
                    maxId = show.id
            })
        }
        this.setState({
            lastShowId: maxId + 1
        })
    }

    componentDidMount() {
        // const { moviesList } = this.state
        // const { showsList } = this.state
        this.calculateMovieId()
        this.calculateShowId()
    }

    addMovie = (s) => {
        this.calculateMovieId()
        this.setState(state => {
            if (state.title !== '' && state.year !== '' && state.duration !== '') {
                var id = this.state.lastMovieId
                var movies = state.moviesList
                let newMovie = new MovieClass(id, s.title, s.year, s.duration, s.image)
                movies.push(newMovie)
                createMovie(id, s.title, s.year, s.duration)
                return {moviesList : movies}
            }
        })
    }

    editMovie = (index, s) => {
        this.setState(state => {
            var movies = state.moviesList

            movies[index].title = s.editTitle
            movies[index].year = s.editYear
            movies[index].duration = s.editDuration
            

            return { moviesList: movies }
        })
        this.createNotification("Zedytowano film")
    }

    deleteMovie = (index) => {
        this.setState(state => {
            var movies = state.moviesList
            movies.splice(index, 1)
            return { moviesList: movies }
        })
    }

    addShow = (s) => {
        const { roomsList } = this.state
        this.calculateShowId()
        this.setState(state => {
            //if (state.title !== '' && state.year !== '' && state.duration !== '' ) {
                var id = this.state.lastShowId
                var shows = state.showsList
                let newShow = new ShowClass(id, s.title, s.year, s.duration, s.date, s.time, s.roomId, roomsList[s.roomId].rows * roomsList[s.roomId].seatsInRow)
                createShow(id, s.title, s.year, s.duration, s.date, s.time, s.roomId, roomsList[s.roomId].rows * roomsList[s.roomId].seatsInRow)
                shows.push(newShow)
                return {showsList : shows}
            //}
        })
    }

    editShow = (index, s) => {
        this.setState(state => {
            var shows = state.showsList

            shows[index].date = s.editDate
            shows[index].hour = s.editHour
            shows[index].room = s.editRoom

            return { ShowsList: shows }
        })
        this.createNotification("Zedytowano seans")
    }

    deleteShow = (index) => {
        this.setState(state => {
            var shows = state.showsList
            shows.splice(index, 1)
            return { showsList: shows }
        })
    }

    render () {
        const { moviesList, showsList, roomsList } = this.state

        return (
            <Router>
                <Navbar/>

                <Routes>
                    <Route exact path="/"
                        //render seansow w danym dniu i aktualnie trwajacych seansow
                    />

                    <Route path="/addMovie"
                        //render ekranu dodawania filmu
                        element={<AddMovie addMovie={this.addMovie}/>}
                    />

                    <Route path="/allMovies"
                        //render wszystkich filmow (zarządzanie filmami - usuwanie i edytowanie)
                        element={<Movies moviesList={moviesList}
                            deleteMovie={this.deleteMovie}
                            editMovie={this.editMovie}
                        />}
                    />

                    <Route path="/addShow"
                        //reander ekranu dodawania seansu
                        //bład nie znajduje addshow
                        element={<AddShow addShow={this.addShow}
                            moviesList={moviesList}
                        />}
                    />

                    <Route path="/allShows"
                        element={<Shows showsList={showsList}
                            roomsList={roomsList}
                            deleteShow={this.deleteShow}
                            editShow={this.editShow}
                        />}
                        //render wszystkich seansow (zarzadzanie seansami - usuwanie i edytowanie)
                    />
                    <Route path="/allRooms"
                        element={<Rooms roomList={this.roomList}
                            
                        />}
                        //render wszystkich seansow (zarzadzanie seansami - usuwanie i edytowanie)
                    />
                    
                </Routes>

            </Router>
        )
    }
}

export default App;
