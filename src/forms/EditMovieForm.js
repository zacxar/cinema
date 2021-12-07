import React from "react"
import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"

class EditMovieForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editTitle: props.moviesList[props.index].title,
            editYear: props.moviesList[props.index].year,
            editDuration: props.moviesList[props.index].duration,
        }
    }

    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }
  

    render() {
        const { index, moviesList, editMovie, onClose } = this.props
        return (
            <div className="alertForm">
                <span className="closeButton">
                    <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
                </span>
                <div className="movieTitleEdit">
                    <label className="movieEditLabel">Tytuł</label>
                    <input type="text" id="editTitle" defaultValue={moviesList[index].title} style={{border: "none"}} onChange={(e) => this.onChange(e)}/>
                </div>
                <div className="movieYearEdit">
                    <label className="movieEditLabel">Rok produkcji</label>
                    <input type="text" id="editYear" defaultValue={moviesList[index].year} style={{border: "none"}} onChange={(e) => this.onChange(e)}/>
                </div>
                <div className="movieDurationEdit">
                    <label className="movieEditLabel">Czas trwania</label>
                    <input type="text" id="editDuration" defaultValue={moviesList[index].duration} style={{border: "none"}} onChange={(e) => this.onChange(e)}/>
                </div>
                <div className="movieEditButton">
                    <Button variant="primary" onClick={() => editMovie(index, this.state)}>Zapisz</Button>
                </div>
            </div>
        )
    }
}

export default EditMovieForm