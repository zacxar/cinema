import React from "react"
import Show from "./Show"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import DetailShowForm from "../forms/DetailShowForm"
import DeleteShowForm from "../forms/DeleteShowForm"
import ShowClass from "../class/ShowClass"
import EditShowForm from "../forms/EditShowForm"

class Shows extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showsList : [
                new ShowClass(0, this.props.moviesList[0].title, this.props.moviesList[0].year, this.props.moviesList[0].duration, new Date(2021, 11, 23, 16, 0).toString(), 5)
                //new ShowClass(1, this.props.moviesList[1])
            ],
        }
    }

    createNotification(message){
        NotificationManager.success('Success', message);
    }
    
    showDetailForm=(id)=>{
        const {showsList}=this.state
        var index=showsList.findIndex(function(value){
            return value.id===id
        })
        confirmAlert({
            customUI:({onClose})=>{
                return(
                    <div>
                    <DetailShowForm List={showsList} index={index} onClose={onClose}/>
                 </div>
                )
            }
        })
    }
    
    showDeleteForm = (id) => {
            const { showsList } = this.state
            var index = showsList.findIndex(function (value) {
                return value.id === id;
            })
    
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div>
                            <DeleteShowForm index={index} onClose={onClose} deleteShow={this.deleteShow}/>
                        </div>
                    )
                }
            })
        }
       
    showEditForm = (id) => {
        const { showsList } = this.state
        var index = showsList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <EditShowForm showsList={showsList} index={index} onClose={onClose} editShow={this.editShow}/>
                        <NotificationContainer/>
                    </div>
                )
            }
        })
    }
    addShow = (s) => {
            this.setState(state => {
                if (state.title !== '' && state.year !== '' && state.duration !== '' ) {
                    var id = state.showsList.length + 1
                    var shows = state.showsList
                    let newShow = new ShowClass(id, s.date, s.hour)
                    shows.push(newShow)
                    return {showsList : shows}
                }
            })
        }
    
    
        editShow = (index, s) => {
            this.setState(state => {
                var shows = state.showsList
    
                shows[index].date = s.editDate
                shows[index].hour = s.editHour
                shows[index].room = s.editRoom
    
                return { ShowsList: shows }
            })
            this.createNotification("Zedytowano seans")
        }
    
        deleteShow = (index) => {
            this.setState(state => {
                var shows = state.showsList
                shows.splice(index, 1)
                return { showsList: shows }
            })
        }
    
        render() {
            return (
                <div>
                    <h3>Lista Filmów</h3>
                    {this.state.showsList.map((show, key) => {
                        return (
                            <Show
                                key={key}
                                id={show.id}
                                title={show.title}
                                year={show.year}
                                duration={show.duration}
                                date={show.date}
                                roomId={show.roomId}
                                showDetailForm={this.showDetailForm}
                                showEditForm={this.showEditForm}
                                showDeleteForm={this.showDeleteForm}
                            />
                        )
                    })}
                    {/* <addShow addShow={this.addShow}/> */}
                </div>
            )
        }
    }


export default Shows