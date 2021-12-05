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
import App from "../App";
import RoomClass from "../class/RoomClass"
import SeatClass from "../class/SeatClass"

class Seats extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            seatsList:[
                
                    new SeatClass(1, 23, 10,1 )
               
            ]
        }
    }

    render() {
        //const { roomList } = this.props
        return (
        <div>
             <h3>Lista siedzen</h3>
             {this.state.seatsList.map((seat, key) => {
                    return (
                        <Room
                            key={key}
                            id={seat.id}
                            iloscMiejsc={seat.iloscMiejsc}
                            iloscWolnychMiejsc={seat.iloscWolnychMiejsc}
                           
                        />
                    )
                })}
            </div>
        )
    }
}

export default Seats