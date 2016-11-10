import React from 'react'

export default class Text extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.name} is pairing with {this.props.pairingWith} </h2>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}

