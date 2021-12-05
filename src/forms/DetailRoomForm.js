import React from "react";
import * as Icon from "react-bootstrap-icons"

const DetailRoomForm = (props) => {
    const { roomList, index, onClose } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
            </span>
            <div className="headerDetail">
                <div>
                    <h3>Nr sali: {roomList[index].id}</h3>
                </div>
            </div>
            <div className="roomDetail">
                
                <p>Ilość miejsc: {roomList[index].iloscMiejsc}</p>
                <p> Ilość Wolnych Miejsc: {roomList[index].iloscWolnychMiejsc}</p>
            
            </div>
        </div>
    )
}

export default DetailRoomForm