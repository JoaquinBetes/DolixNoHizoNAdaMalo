import "../index.css";
import "./components.css";
import React from 'react';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
    }


    render() {

        return (
            <div className="main">
                {this.title}
                {this.content}
            </div>
        )
    }
}
