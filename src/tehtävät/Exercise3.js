import React, { Component } from 'react';


class Exercise3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            weather: '',
            icon: ''
        }
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/find?q=Helsinki&units=metric&appid=f62562dbc2ad752b7934043b1bf8dee0')
        .then((response) => response.json())
        .then((res) => {
            this.setState({
                temperature: res.list[0].main.temp,
                weather:  res.list[0].weather[0].main,
                icon: 'http://openweathermap.org/img/w/' + res.list[0].weather[0].icon + '.png'
            })
        })
    }

    render() {
        return (
            <div className="container">
                <p>Temperature: {this.state.temperature} Celsius</p>
                <p>Weather: {this.state.weather}</p>
                <img src={this.state.icon} alt='icon'/>
            </div>
        )
    }
}

export default Exercise3;