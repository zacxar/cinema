import React from "react"
import Movie from "./Movie"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import MovieClass from "../class/MovieClass"

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList : [
                new MovieClass(1, "Terminator", 1980, 120),
                new MovieClass(2, "Indiana Jones", 1985, 124)
            ],
        }
        this.showDetailForm = this.showDetailForm.bind(this)
        this.showEditForm = this.showEditForm.bind(this)
        this.showDeleteForm = this.showDeleteForm.bind(this)
        this.addMovie = this.addMovie.bind(this)
        this.editMovie = this.editMovie.bind(this)
        this.deleteMovie = this.deleteMovie.bind(this)
    }

    showDetailForm(id) {
        const { moviesList } = this.state
        var index = moviesList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <DetailMovieForm moviesList={moviesList} index={index} onClose={onClose}/>
                )
            }
        })
    }

    showEditForm(id) {
        const { moviesList } = this.state
        var index = moviesList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <EditMovieForm moviesList={moviesList} index={index} onClose={onClose} editMovie={this.editMovie}/>
                        <NotificationContainter/>
                    </div>
                )
            }
        })
    }

    showDeleteForm(id) {
        const { moviesList } = this.state
        var index = moviesList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <DeleteMovieForm index={index} onClose={onClose} deleteMovie={this.deleteMovie}/>
                    </div>
                )
            }
        })
    }
    
    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }

    addMovie(s) {
        this.setState(state => {
            if (state.title !== '' && state.year !== '' && state.duration !== '') {
                var id = state.moviesList.length + 1
                var movies = state.moviesList
                let newMovie = new MovieClass(id, s.title, s.year, s.duration)
                movies.push(newMovie)
                return {moviesList : movies}
            }
        })
    }

    editMovie(index, s) {
        this.setState(state => {
            var movies = state.moviesList

            movies[index].title = s.editTitle
            movies[index].year = s.editYear
            movies[index].duration = s.editDuration

            return { moviesList: movies }
        })
        this.createNotification("Zedytowano film")
    }

    deleteMovie(index) {
        this.setState(state => {
            var movies = state.moviesList
            movies.splice(index, 1)
            return { moviesList: movies }
        })
    }

    render() {
        return (
            <div>
                <h3>Lista Filmów</h3>
                {this.state.moviesList.map((movie, key) => {
                    return (
                        <Movie
                            key={key}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            duration={movie.duration}
                            showDetailForm={this.showDetailForm}
                            showEditForm={this.showEditForm}
                            showDeleteForm={this.showDeleteForm}
                        />
                    )
                })}

                <div>
                    <p>Dodaj Film</p>
                    <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                    <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                    <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                    <button variant="secondary" onClick={() => this.addMovie()}>Dodaj</button>
                </div>

            </div>
        )
    }
}

export default Movies