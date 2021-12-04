import React from "react";
import * as Icon from "react-bootstrap-icons"

const DetailShowForm = (props) => {
    const { showsList, index, onClose } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XLg color="black" size={18} onClick={() => onClose}/>
            </span>
            <div className="headerDetail">
                <div>
                    <h3>Tytuł: {showsList[index].title}</h3>
                </div>
            </div>
            <div className="showsDetail">
                <p>Data seansu: {showsList[index].date}</p>
                <p>Godzina sansu: {showsList[index].hour}</p>
            </div>
        </div>
    )
}

export default DetailShowForm