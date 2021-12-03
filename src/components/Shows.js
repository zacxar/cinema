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
import AddShow from "../AddShow";

class Shows extends React.Component {
    constructor(props){
        super(props)
    }
    
    showDetailForm=(id)=>{
        const {showsList}=this.props
        var index=showsList.findIndex(function(value){
            return value.id === id
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
            const { showsList, deleteShow } = this.props
            var index = showsList.findIndex(function (value) {
                return value.id === id;
            })
    
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div>
                            <DeleteShowForm index={index} onClose={onClose} deleteShow={deleteShow}/>
                        </div>
                    )
                }
            })
        }
       
    showEditForm = (id) => {
        const { showsList, editShow } = this.props
        var index = showsList.findIndex(function (value) {
            return value.id === id;
        })

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <EditShowForm showsList={showsList} index={index} onClose={onClose} editShow={editShow}/>
                        <NotificationContainer/>
                    </div>
                )
            }
        })
    }
    
    render() {
        const { showsList } = this.props
        return (
            <div>
                <h3>Lista Seansów</h3>
                {showsList.map((show, key) => {
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
            </div>
        )
    }
}


export default Shows