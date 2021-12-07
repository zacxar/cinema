import React from "react";
import { Button } from "react-bootstrap"
import { confirmAlert } from "react-confirm-alert"
import { Navigate } from "react-router-dom"
// import "./styles/addMovie.css"
import { createMovie } from "./api/Api";

class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            year: '',
            duration: '',
            //image:'',
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
            //image: image
        }
        
        addMovie(body)
        this.setState({
            redirect: true
        })
    }

    validateAddMovieForm=(movie)=>{
        var message=[]
        if(movie.title===""){
            message.push("Pole obowiązkowe. Wpisz tytuł filmu")
        }
        else if(movie.title.length<=1)
        message.push("Tytuł jest za krótki. Wpisz wyraz zamierający co najmniej 2 litery")
        else if(!movie.title[0].toUpperCase())
        message.push("Niepoprawna nazwa, podaj tytuł zaczynając od wielkiej litery/liczby")
        else if(movie.duration<30)
        message.push("Czas trwania jest za krótki, podaj wartość większą niż 30")
    }

    render() {
        const { redirect } = this.state
        if (redirect === true)
            return <Navigate to="/allMovies"/>
           // let sciezka

        return (
            <div className="add">
                <p>Dodaj nowy film</p>
                {/* <input type="text" placeholder="Plakat" id="image" onChange={(e) => this.onChange(e)}  /> */}
                
                
                <input type="text" placeholder="Tytuł filmu" id="title" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Rok produkcji" id="year" onChange={(e) => this.onChange(e)}/>
                <input type="text" placeholder="Długość filmu (minuty)" id="duration" onChange={(e) => this.onChange(e)}/>
                <Button variant="secondary" onClick={this.add}>Dodaj film</Button>
            </div>
        )
    }
}

export default AddMovie