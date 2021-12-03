import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const Room = props => {
    return (
        <div>
            <p>Nr sali: {props.roomId}</p>
            <p>Ilość miejsc: {props.iloscMiejsc}</p>
            

            {/* <Button variant="secondary" onClick={() => props.showEditForm(props.id)}>Edytuj salę</Button>
            <Button variant="secondary" onClick={() => props.showDeleteForm(props.id)}>Usuń salę</Button> */}
        </div>
    )
}

Room.propTypes = {
    roomId: PropTypes.number,
    iloscMiejsc: PropTypes.number,
   
}

// Movie.defaultProps = {
//     title: "MovieTitle",
//     year: 0,
//     duration: 0
// }

export default Movie