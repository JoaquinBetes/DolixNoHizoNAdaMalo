import "../index.css";
import "./components.css";
import React from 'react';

export class TattooBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "../img/rei.jpg",
            name: null,
        }
    }

    render() {
        console.log(this.state.img)
        return (
            <div className="box">
                <img src={require('../img/rei.jpg')} className="img-tattoo" alt="tattoo you gay"/>
                <span className="name-tattoo">rei ayanami</span>
            </div>
        )
    }
}

export class Tattoos extends React.Component {
    constructor(props) {
        super(props);
        this.idk=0;
    }

    render() {

        return (
            <div className="tattoo-all-conteiner">
                <span className="tattoo-arrow left-a">{"<"}</span>
                <div className="tattooBox-container">
                    <TattooBox/>
                    <TattooBox/>
                    <TattooBox/>
                    <TattooBox/>
                </div>
                <span className="tattoo-arrow rigth-a">{">"}</span>
            </div>
        )
    }
}