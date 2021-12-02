import React from "react"
import PropTypes from "prop-types"

const Movie = props => {
    return (
        <div>
            <p>Tytuł: {props.title}</p>
            <p>Rok produkcji: {props.year}</p>
            <p>Czas trwania: {props.duration}</p>

            <button variant="secondary">Edytuj Film</button>
            <button variant="secondary">Usuń Film</button>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number
}

// Movie.defaultProps = {
//     title: "MovieTitle",
//     year: 0,
//     duration: 0
// }

export default Movie