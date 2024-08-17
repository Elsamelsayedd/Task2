import React, { Component } from 'react'

export default class Parent extends Component {



    constructor() {
        super();
        this.state = {
            subscribe: "Guest",
            isloggedIn: false
        }

    }


    changeMessage() {

        console.log(`hello`);

        this.setState({
            subscribe: "eslam",
            isloggedIn: true
        })





    }


    render() {
        console.log(this.state.isloggedIn);
        return (<>
            <h1>{this.state.subscribe}</h1>
            <h1>false:{this.state.isloggedIn}</h1>

            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </>

        )
    }
}
