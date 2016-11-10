import React from 'react'

export default class Date extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.date.toDateString()}</p>
            </div>
        )
    }
}

