import React from "react";
import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"

const DeleteMovieForm = (props) => {
    const { index, onClose, deleteMovie } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
            </span>
            <div>
                <Icon.Info size={60} color="#017FF" />
                Czy na pewno chcesz usunąć film?
            </div>
            <div className="movieDeleteButtons">
                <Button variant="primary" onClick={() => onClose()}>Nie</Button>
                <Button variant="danger" style={{ marginLeft: "10px" }}
                onClick={() => {
                    deleteMovie(index)
                    onClose()
                }}>Tak</Button>
            </div>
        </div>
    )
}

export default DeleteMovieForm