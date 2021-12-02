import React from "react"
import Movies from "./components/Movies"
import { confirmAlert } from "react-confirm-alert"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Navbar from "./Navbar"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AddMovie from "./AddMovie"
import MovieClass from "./class/MovieClass"
import Shows from "./components/Shows"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList : [
                new MovieClass(1, "Terminator", 1980, 120),
                new MovieClass(2, "Indiana Jones", 1985, 124)
            ]
        }
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
            lastId: maxId + 1
        })
    }

    componentDidMount() {
        this.calculateMovieId()
    }

    addMovie = (s) => {
        this.calculateMovieId()
        this.setState(state => {
            if (state.title !== '' && state.year !== '' && state.duration !== '') {
                var id = this.state.lastId
                var movies = state.moviesList
                let newMovie = new MovieClass(id, s.title, s.year, s.duration)
                movies.push(newMovie)
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

    render () {
        const { moviesList } = this.state
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
                    />

                    <Route path="/allShows"
                        element={<Shows moviesList={moviesList}/>}
                        //render wszystkich seansow (zarzadzanie seansami - usuwanie i edytowanie)
                    />
                </Routes>

            </Router>
        )
    }
}

export default App;
