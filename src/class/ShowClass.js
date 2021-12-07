class ShowClass {
    constructor(id, movieId, title, year, duration, date, hour, minute, roomId, seats) {
        this.id = id
        this.movieId = movieId
        this.title = title
        this.year = year
        this.duration = duration
        this.date = date
        this.hour = hour
        this.minute = minute
        this.roomId = roomId
        this.seats = seats
        this.reservedSeats = []
    }
}

export default ShowClass