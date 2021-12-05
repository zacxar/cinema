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
        const { seatsArray } = this.state
        const { roomsList, showsList, index } = this.props
        const roomId = showsList[index].roomId

        var ar = Array.from(Array(roomsList[roomId].seatsInRow).keys())
        
        return (
            <div className="row">
                <div className="rowMarker">{String.fromCharCode(65 + rowNumber)}</div>
                {ar.map((seat, key) => {
                    return <div id={rowNumber * roomsList[roomId].seatsInRow + key} className="seatdiv" onClick={() => this.onClick()}>{seat}</div>
                })}
            </div>
        )

        // for(let j = 0; j < roomsList[roomId].seatsInRow; j++) {
        //     if(j === 0) {
        //         seatsArray.push(<div className="rowMarker">{String.fromCharCode(65 + rowNumber)}</div>)
        //     }

        //     seatsArray.push(<div id={rowNumber * roomsList[roomId].seatsInRow + j} className="seatsDiv">{j}</div>)
        // }
    }

    renderSeats() {
        const { seatsArray } = this.state
        const { roomsList, showsList, index } = this.props
        const roomId = showsList[index].roomId

        for(let i = 0; i < roomsList[roomId].rows; i++) {
            <div className="row">
            </div>
        }
    }

    render() {
        const { seatsArray } = this.state
        const { index, onClose, showsList, roomsList } = this.props
        const roomId = showsList[index].roomId
        this.generateSeats()
        return (
            <div className="reservation">
                <div className="alertForm">
                    <span className="closeButton">
                        <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
                    </span>
                    <p>Seans id = {showsList[index].id}</p>
                    <p>Sala = {showsList[index].roomId}</p>
                    {seatsArray.map((seat, key) => {
                        return seat
                    })}
                </div>
            </div>
        )
    }
}

export default ReservationForm