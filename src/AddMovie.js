import React from "react";
import { Button } from "react-bootstrap"
import { confirmAlert } from "react-confirm-alert"
import { Navigate } from "react-router-dom"

class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            year: '',
            duration: '',
            image:'',
            redirect: false
        }
    }

    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }

    add = () => {
        const { addMovie } = this.props
        const { title, year, duration, image } = this.state

        const body = {
            title: title,
            year: year,
            duration: duration,
            image: image
        }

        addMovie(body)
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state
        if (redirect === true)
            return <Navigate to="/allMovies"/>
           // let sciezka

        return (
            <div>
                <p>Dodaj nowy film</p>
                <input type="text" placeholder="Plakat" id="image" onChange={(e) => this.onChange(e)}  />
                
                
                <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                <Button variant="secondary" onClick={this.add}>Dodaj film</Button>
            </div>
        )
    }
}

export default AddMovie