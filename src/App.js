import React from "react"
import Movies from "./components/Movies"

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>CinemaCity</h1>
                <Movies/>
            </div>
        )
    }
}

export default App;
