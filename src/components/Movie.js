import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const Movie = props => {
    return (
        <div className="movieContainer">
            <h3>{props.title}</h3>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>
            <p>{props.image}</p>

            <Button variant="secondary" onClick={() => props.showEditForm(props.id)}>Edytuj Film</Button>
            <Button variant="secondary" onClick={() => props.showDeleteForm(props.id)}>Usuń Film</Button>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
    //image: PropTypes
}

// Movie.defaultProps = {
//     title: "MovieTitle",
//     year: 0,
//     duration: 0
// }

export default Movie