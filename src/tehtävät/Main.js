import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: ''
        }
    }
    componentDidMount() {
        this.newjoke();
    }
    newjoke = () => {
        axios.get('http://api.icndb.com/jokes/random')
        .then(response => {
            this.setState({
                joke: response.data.value.joke
            })
        })
        .catch((err) => {
            this.setState({
                joke: 'No Chuck Norris jokes avaible :('
            })
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Welcome to the React exercise website!</h1>
                <h3>Made by Juhani Turpeinen</h3>
                <div className="jokeBox">
                    <h5>Here is Chuck Norris joke provided by <a href="http://www.icndb.com/">ICNDb.com</a></h5>
                    <p>{this.state.joke}</p>
                </div> <br/>
                <button onClick={this.newjoke} className="btn btn-primary">Get New Joke</button>
            </div>
        )
    }
}

export default Main;