import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const Seat = props => {
    return (
        <div>
            <p>Nr siedzenia: {props.seatId}</p>
            <p>Nr rzedu: {props.nrRzedu}</p>
            {/* <p>Ilość : {props.iloscWolnychMiejsc}</p> */}
            {/* <p>Ilosc zajetych miejsc: {props.iloscMiejsc-props.iloscWolnychMiejsc}</p> */}
            

            {/* <Button variant="secondary" onClick={() => props.showEditForm(props.id)}>Edytuj salę</Button>
            <Button variant="secondary" onClick={() => props.showDeleteForm(props.id)}>Usuń salę</Button> */}
        </div>
    )
}

Seat.propTypes = {
    seatId: PropTypes.number.isRequired,
    nrRzedu: PropTypes.number.isRequired,
   // iloscWolnychMiejsc:PropTypes.number
   
}

// Movie.defaultProps = {
//     title: "MovieTitle",
//     year: 0,
//     duration: 0
// }

export default Seat