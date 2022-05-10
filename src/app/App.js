import React, { Component } from "react";

import ClimaInfo from "./componentes/ClimaInfo";
import ClimaForm from "./componentes/ClimaForm";

import { CLIMA_KEY } from './keys'

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getClima = async (evento) => {
        evento.preventDefault();
        const { city, pais } = evento.target.elements;
        const cityValue = city.value;
        const paisValue = pais.value;

        if (cityValue && paisValue) {
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${paisValue}&appid=${CLIMA_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            })
        } else {
            this.setState({ error: 'Please Enter a city and a country' })
        }
    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <ClimaForm getClima={this.getClima} />
                        <ClimaInfo temperature {...this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;