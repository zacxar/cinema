import React from "react"
import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
import Seat from "../components/Seat"
import Seats from "../components/Seats"
import SeatClass from "../class/SeatClass"
import "../styles/reservationform.css"

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seatsList : [],
            seatsArray : [
              //  new SeatClass(1, 23, 10,1 )
            ]
        }
    }

    generateSeats() {
        const { seatsArray } = this.state
        const { roomsList, showsList, index } = this.props
        const roomId = showsList[index].roomId
        
        for(let i = 0; i < roomsList[roomId].rows; i++) {
            seatsArray.push(this.generateRow(i))
        }
    }
    
    generateRow(rowNumber) {
        const { roomsList, showsList, index } = this.props
        const roomId = showsList[index].roomId
        const { reservedSeats } = showsList.reservedSeats
        const { pickedSeats } = showsList.pickedSeats

        var ar = Array.from(Array(roomsList[roomId].seatsInRow).keys())
        
        return (
            <div className="row">
                <div className="rowMarker">{String.fromCharCode(65 + rowNumber)}</div>
                {ar.map((seat, key) => {
                    let seatId = rowNumber * roomsList[roomId].seatsInRow + key
                    if(reservedSeats.includes())
                    return <div id={rowNumber * roomsList[roomId].seatsInRow + key} className="seat" onClick={() => this.onClick()}>{seat}</div>
                })}
            </div>
        )
    }

    render() {
        const { seatsArray } = this.state
        const { index, onClose, showsList } = this.props
        this.generateSeats()
        return (
            <div className="reservation">
                <div className="alertForm">
                    <span className="closeButton">
                        <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
                    </span>
                    <p>Seans id = {showsList[index].id}</p>
                    <p>Sala = {showsList[index].roomId}</p>
                    <p>Film = {showsList[index].title}</p>
                    {seatsArray.map((seat, key) => {
                        return seat
                    })}
                </div>
            </div>
        )
    }
}

export default ReservationForm