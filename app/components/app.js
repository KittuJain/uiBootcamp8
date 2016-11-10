import React from 'react'
import Date from './date'
import Image from './image'
import Text from './text'
import Clock from './clock'

export default class App extends React.Component {
    render() {
        var content = this.props.content;
        return (
            <div id='content'>
                <Image image={content.image}/>
                <Text name={content.name} pairingWith={content.pairingWith} comment={content.comment}/>
                <Date date={content.date}/>
                <Clock clock={content.date}/>
            </div>
        )
    }
}


