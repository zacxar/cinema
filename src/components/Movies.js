import React from "react"
import Movie from "./Movie"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AddMovie from "../AddMovie"
import MovieClass from "../class/MovieClass"
import DeleteMovieForm from "../forms/DeleteMovieForm"
import EditMovieForm from "../forms/EditMovieForm"
import DetailMovieForm from "../forms/DetailMovieForm"


class Movies extends React.Component {
    constructor(props) {
        super(props)
    }

    showDetailForm = (id) => {
        const { moviesList } = this.props
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

    showEditForm = (id) => {
        const { moviesList, editMovie } = this.props
        var index = moviesList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <EditMovieForm moviesList={moviesList} index={index} onClose={onClose} editMovie={editMovie}/>
                        <NotificationContainer/>
                    </div>
                )
            }
        })
    }

    showDeleteForm = (id) => {
        const { moviesList, deleteMovie } = this.props
        var index = moviesList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <DeleteMovieForm index={index} onClose={onClose} deleteMovie={deleteMovie}/>
                    </div>
                )
            }
        })
    }

    render() {
        const { moviesList } = this.props
        return (
            <div>
                <h3>Lista Filmów</h3>
                {moviesList.map((movie, key) => {
                    return (
                        <Movie
                            key={key}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            duration={movie.duration}
                            image={movie.image}
                            showDetailForm={this.showDetailForm}
                            showEditForm={this.showEditForm}
                            showDeleteForm={this.showDeleteForm}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Movies