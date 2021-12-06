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

    onClick(e) {
        const seat = e.target
        const { showsList, index } = this.props
        
        if(seat.className === "seat") {
            seat.className = "seatPicked"
            showsList[index].pickedSeats.push(seat.id)
        }
        else if(seat.className === "seatPicked") {
            seat.className = "seat"

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
        // const { reservedSeats } = showsList[index].reservedSeats
        // const { pickedSeats } = showsList[index].pickedSeats

        var ar = Array.from(Array(roomsList[roomId].seatsInRow).keys())
        
        return (
            <div className="row">
                <div className="rowMarker">{String.fromCharCode(65 + rowNumber)}</div>
                {ar.map((seat, key) => {
                    let seatId = rowNumber * roomsList[roomId].seatsInRow + key
                    if(showsList[index].reservedSeats.includes(seatId))
                        return <div id={rowNumber * roomsList[roomId].seatsInRow + key} className="seatReserved">{seat}</div>
                    else if(showsList[index].pickedSeats.includes(seatId))
                        return <div id={rowNumber * roomsList[roomId].seatsInRow + key} className="seatPicked" onClick={(e) => this.onClick(e)}>{seat}</div>
                    else
                        return <div id={rowNumber * roomsList[roomId].seatsInRow + key} className="seat" onClick={(e) => this.onClick(e)}>{seat}</div>
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
                    <div className="showInfo">
                        <p>Sala nr {showsList[index].roomId}</p>
                        <p>Film = {showsList[index].title}</p>
                        <div className="seatInfo">
                            <div class="seatInfoAvailable"></div>
                            <p>Wolne miejsce</p>
                        </div>
                        <div className="seatInfo">
                            <div class="seatInfoPicked"></div>
                            <p>Wybrane miejsce</p>
                        </div>
                        <div className="seatInfo">
                            <div class="seatInfoReserved"></div>
                            <p>Zarezerwowane miejsce</p>
                        </div>
                    </div>
                    {seatsArray.map((seat, key) => {
                        return seat
                    })}
                </div>
            </div>
        )
    }
}

export default ReservationForm