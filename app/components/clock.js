import React from 'react'

export default class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date : this.props.clock
        }
    }

    componentDidMount() {
        setInterval(()=> {
            this.setState({date: new Date()})
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>{this.state.date.toTimeString().substr(0, 8)}</p>
            </div>
        )

    }
}