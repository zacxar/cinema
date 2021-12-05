import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const Show = props => {
    return (
        <div>
            <p>Tytuł: {props.title}</p>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>
            <p>Data: {props.date}</p>
            <p>Godzina: {props.time}</p>
            <p>Sala: {props.roomId}</p>
            <p>Ilość miejsc: {props.seats}</p>
            
            <Button variant="primary" onClick={() => props.showEditForm(props.id)}>Edytuj Seans</Button>
            <Button variant="secondary" onClick={() => props.showDeleteForm(props.id)}>Usuń Seans</Button>
            <Button variant="primary" onClick={() => props.showReservationForm(props.id)}>Kup Bilet</Button>
        </div>
    )
}

Show.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    date: PropTypes.instanceOf(Date)
}

// Movie.defaultProps = {
//     title: "MovieTitle",
//     year: 0,
//     duration: 0
// }

export default Show