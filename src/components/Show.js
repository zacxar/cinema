import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const Show = props => {
    return (
        <div>
            <p>Tytuł: {props.title}</p>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>
            <p>Data i godzina: {props.date.getDate()}.{props.date.getMonth() + 1}.{props.date.getFullYear()}</p>
            <p>Sala: {props.roomId}</p>

            <Button variant="primary" onClick={() => props.showEditForm(props.id)}>Edytuj Seans</Button>
            <Button variant="secondary" onClick={() => props.showDeleteForm(props.id)}>Usuń Seans</Button>
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