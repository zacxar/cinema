import React from "react";
import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"

const DeleteRoomForm = (props) => {
    const { index, onClose, deleteRoom } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
            </span>
            <div>
                <Icon.Info size={60} color="#017FF" />
                Czy na pewno chcesz usunąć pokój?
            </div>
            <div className="roomDeleteButtons">
                <Button variant="primary" onClick={() => onClose()}>Nie</Button>
                <Button variant="danger" style={{ marginLeft: "10px" }}
                onClick={() => {
                    deleteRoom(index)
                    onClose()
                }}>Tak</Button>
            </div>
        </div>
    )
}

export default DeleteRoomForm