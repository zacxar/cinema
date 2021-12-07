import React from "react"
import Show from "./Show"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import DetailShowForm from "../forms/DetailShowForm"
import DeleteShowForm from "../forms/DeleteShowForm"
import ShowClass from "../class/ShowClass"
import EditShowForm from "../forms/EditShowForm"
import AddShow from "../AddShow";
import ReservationForm from "../forms/ReservationForm"

class Shows extends React.Component {
    constructor(props){
        super(props)
    }
    
    showDetailForm=(id)=>{
        const {showsList}=this.props
        var index=showsList.findIndex(function(value){
            return value.id === id
        })
        confirmAlert({
            customUI:({onClose})=>{
                return(
                    <div>
                        <DetailShowForm List={showsList} index={index} onClose={onClose}/>
                    </div>
                )
            }
        })
    }
    
    showDeleteForm = (id) => {
            const { showsList, deleteShow } = this.props
            var index = showsList.findIndex(function (value) {
                return value.id === id;
            })
    
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div>
                            <DeleteShowForm index={index} onClose={onClose} deleteShow={deleteShow}/>
                        </div>
                    )
                }
            })
        }
       
    showEditForm = (id) => {
        const { showsList, editShow, moviesList, roomsList } = this.props
        var index = showsList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <EditShowForm showsList={showsList} index={index} onClose={onClose} editShow={editShow} moviesList={moviesList} roomsList={roomsList}/>
                        <NotificationContainer/>
                    </div>
                )
            }
        })
    }
    
    showReservationForm = (id) => {
        const { showsList, roomsList } = this.props
        var index = showsList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <ReservationForm showsList={showsList} roomsList={roomsList} index={index} onClose={onClose}/>
                        <NotificationContainer/>
                    </div>
                )
            }
        })
    }

    render() {
        const { showsList } = this.props
        return (
            <div>
                <h3>Lista Seansów</h3>
                {showsList.map((show, key) => {
                    return (
                         <Show
                            key={key}
                            id={show.id}
                            movieId={show.movieId}
                            title={show.title}
                            year={show.year}
                            duration={show.duration}
                            date={show.date}
                            hour={show.hour}
                            minute={show.minute}
                            roomId={show.roomId}
                            seats={show.seats}
                            showDetailForm={this.showDetailForm}
                            showEditForm={this.showEditForm}
                            showDeleteForm={this.showDeleteForm}
                            showReservationForm={this.showReservationForm}
                        />
                    )
                })}
            </div>
        )
    }
}


export default Shows