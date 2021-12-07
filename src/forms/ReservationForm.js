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
            seatsArray : [],
            pickedSeats : [],
            reservedSeats : []
        }
    }

    onClick(e) {
        const seat = e.target
        const { pickedSeats } = this.state

        if(seat.className === "seat") {
            let seats = this.state.pickedSeats
            seat.className = "seatPicked"
            seats.push(seat.id)
            console.log("dodaj " + seat.id)
            return {pickedSeats : seats}
        }
        else if(seat.className === "seatPicked") {
            seat.className = "seat"
            let id = pickedSeats.findIndex(function(value) {
                return value.id === seat.id
            })
            pickedSeats.splice(id, 1)
            console.log("usun " + seat.id)
        }
    }

    handleReservation() {
        const { pickedSeats } = this.state
        const { showsList, index } = this.props

        for(let seat of pickedSeats) {
            if(!showsList[index].reservedSeats.includes(seat)) {
                showsList[index].reservedSeats.push(seat)
                document.getElementById(seat).className = "seatReserved"
                console.log("rezerwacja " + seat)
            }
        }
        for(let s of showsList[index].reservedSeats) {
            console.log("r = " + s)
        }
        pickedSeats.length = 0
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
        const { pickedSeats } = this.state
        const roomId = showsList[index].roomId

        var ar = Array.from(Array(roomsList[roomId].seatsInRow).keys())
        
        return (
            <div className="row">
                <div className="rowMarker">{String.fromCharCode(65 + rowNumber)}</div>
                {ar.map((seat, key) => {
                    let seatId = rowNumber * roomsList[roomId].seatsInRow + key
                    if(showsList[index].reservedSeats.includes("seat" + (seatId)))
                        return <div id={"seat" + (seatId)} className="seatReserved">{seat}</div>
                    else if(pickedSeats.includes("seat" + (seatId)))
                        return <div id={"seat" + (seatId)} className="seatPicked" onClick={(e) => this.onClick(e)}>{seat}</div>
                    else
                        return <div id={"seat" + (seatId)} className="seat" onClick={(e) => this.onClick(e)}>{seat}</div>
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
                    <Button variant="primary" onClick={() => this.handleReservation()}>Kup Bilety</Button>
                </div>
            </div>
        )
    }
}

export default ReservationForm