import React from "react"
import { Button } from "react-bootstrap"
import * as Icon from "react-bootstrap-icons"
import DatePicker from "react-date-picker"


class EditShowForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editDate : props.showsList[props.index].date,
            editHour : props.showsList[props.index].hour,
            editMinute : props.showsList[props.index].minute,
        }
    }

    onChange(e) {
        var name = e.target.id
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        const { index, showsList, editShow, onClose } = this.props

        let today = new Date()
        
        let todayYear = today.getFullYear()
        let todayMonth = today.getMonth() + 1
        let todayDay = today.getDate()

        if(todayDay < 10)
            todayDay = '0' + todayDay

        if(todayMonth < 10)
            todayMonth = '0' + todayMonth

        let todayDate = todayYear + "-" + todayMonth + "-" + todayDay
        let maxDate = (todayYear + 1) + "-" + todayMonth + "-" + todayDay

        var hourList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        var minuteList = [0, 15, 30, 45]

        return (
            <div className="alertForm">
                <span className="closeButton">
                    <Icon.XLg color="black" size={18} onClick={() => onClose()}/>
                </span>
                
                <label>
                    Data:
                    <input type="date" id="editDate" min={todayDate} max={maxDate} defaultValue={showsList[index].date} onChange={(e) => this.onChange(e)}/>
                </label>

                <label>
                    Godzina:
                    <select id="editHour" onChange={(e) => this.onChange(e)}>
                        <option value={showsList[index].hour}>Obecna godzina: {showsList[index].hour}</option>
                        {hourList.map((key) => {
                            return (
                                <option value={key}>{key}</option>
                            )
                        })}
                    </select>

                    <select id="editMinute" onChange={(e) => this.onChange(e)}>
                        <option value={showsList[index].minute}>Obecna minuta: {showsList[index].minute}</option>
                        {minuteList.map((key) => {
                            return (
                                <option value={key}>{key}</option>
                            )
                        })}
                    </select>
                    {/* <input type="time" id="showTime" onChange={(e) => this.onChange(e)}/> */}
                </label>

                <div className="showEditButton">
                    <Button variant="primary" onClick={() => editShow(index, this.state)}>Zapisz</Button>
                </div>
            </div>
        )
    }
}

export default EditShowForm