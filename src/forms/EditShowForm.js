import React from "react"
import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
import DatePicker from "react-date-picker"


class EditShowForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //editTitle: props.moviesList[props.index].title,
            editDate: props.showsList[props.index].date,
            editHour: props.showsList[props.index].date,
        }
    }

    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }
    datePick()
    {
        const [value, onChange]=this.useState(new Date())
        return(
            <div>
                <DatePicker
                onChange={this.onChange}
                value={this.value}
                />
            </div>
        )
    }

    render() {
        const { index, showsList, editShow, onClose } = this.props
        return (
            <div className="alertForm">
                <span className="closeButton">
                    <Icon.XLg color="black" size={18} onClick={() => onClose}/>
                </span>
                <div className="showDateEdit">
                    <label className="showEditLabel">Data</label>
                    <input type="text" id="editDate" defaultValue={showsList[index].date} style={{border: "none"}} onChange={()=>this.onChange}/>
                </div>
                <div className="showDateEdit">
                    <label className="showEditLabel">Godzina</label>
                    <input type="text" id="editHour" defaultValue={showsList[index].date} style={{border: "none"}} onChange={() => this.onChange}/>
                </div>
           
                <div className="showEditButton">
                    <Button variant="primary" onClick={() => editShow(index, this.state)}>Zapisz</Button>
                </div>
            </div>
        )
    }
}

export default EditShowForm