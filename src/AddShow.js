import React from "react";
import { Button } from "react-bootstrap"
import { confirmAlert } from "react-confirm-alert"
import { Navigate } from "react-router-dom"

class AddShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            year: '',
            duration: '',
            date:'',
            roomId:'',
            redirect: false,
        }
    }

    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }

    add = () => {
        const { addShow } = this.props
        const { title, year, duration, date, roomId } = this.state

        const body = {
            title: title,
            year: year,
            duration: duration,
            date: date,
            roomId: roomId
        }
//problem-blad wskazujacy na toze assShow nie jest funkcja
        addShow(body)
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state
        if (redirect === true)
            return <Navigate to="/allShows"/>

        return (
            <div>
                <p>Dodaj nowy seans</p>
                <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Data i godzina" id="date" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Sala" id="roomId" onChange={(e) => this.onChange(e)}/>
                <Button variant="secondary" onClick={this.add}>Dodaj seans</Button>
            </div>
        )
    }
}

export default AddShow