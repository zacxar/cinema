import React from "react"
import Movie from "./Movie"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Room from "./Room"
import MovieClass from "../class/MovieClass"
import DeleteMovieForm from "../forms/DeleteMovieForm"
import EditMovieForm from "../forms/EditMovieForm"
import DetailMovieForm from "../forms/DetailMovieForm"

class Rooms extends React.Component {
    constructor(props) {
        super(props)
    }

    showDetailForm = (id) => {
        const { roomList } = this.props
        var index = roomList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <DetailRoomForm roomList={roomList} index={index} onClose={onClose}/>
                )
            }
        })
    }

    showEditForm = (id) => {
        const { roomList, editRoom } = this.props
        var index = roomList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <EditRoomForm roomList={roomList} index={index} onClose={onClose} editRoom={editRoom}/>
                        <NotificationContainer/>
                    </div>
                )
            }
        })
    }

    showDeleteForm = (id) => {
        const { roomList, deleteRoom } = this.props
        var index = roomList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <DeleteRoomForm index={index} onClose={onClose} deleteRoom={deleteRoom}/>
                    </div>
                )
            }
        })
    }

    render() {
        const { moviesList } = this.props
        return (
            <div>
                <h3>Lista Sali Kinowych</h3>
                {moviesList.map((room, key) => {
                    return (
                        <Room
                            key={key}
                            id={room.id}
                            title={room.title}
                            iloscMiejsc={room.iloscMiejsc}
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

export default Room