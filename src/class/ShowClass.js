class ShowClass {
    constructor(id, title, year, duration, date, time, roomId, seats) {
        this.id = id
        this.title = title
        this.year = year
        this.duration = duration
        this.date = date
        this.time = time
        this.roomId = roomId
        this.seats = seats
        this.reservedSeats = new Array(0)
        this.pickedSeats = new Array(0)
    }
}

export default ShowClass