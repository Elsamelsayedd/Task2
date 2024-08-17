import React, { Component } from 'react'

export default class ClassProps extends Component {





    render() {

        console.log(this.props);



        return (<>

            <h1>{this.props.frist}</h1>
            <h2>{this.props.last}</h2>
        </>

        )
    }
}
