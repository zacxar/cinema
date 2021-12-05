import React from "react";
import * as Icon from "react-bootstrap-icons"
//import movieDetail from "../styles/movieDetail"

const DetailMovieForm = (props) => {
    const { moviesList, index, onClose } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
            </span>
            <div className="headerDetail">
                <div>
                    <h3>Tytuł: {moviesList[index].title}</h3>
                </div>
            </div>
            <div className="movieDetail">
                <p>
                <img src={moviesList[index].image} alt="image"/>
                </p>
                <p>Rok produkcji: {moviesList[index].year}</p>
                <p>Czas trwania: {moviesList[index].duration}</p>
            </div>
        </div>
    )
}

export default DetailMovieForm