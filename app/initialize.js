import ReactDom from 'react-dom'
import React from 'react'
import App from 'components/app'

let content = {
    name: "Krati",
    pairingWith: "Mahadev",
    comment: "They are enjoying learning react",
    image: "http://i.imgur.com/xxzcIgr.png",
    date: new Date()
};

ReactDom.render(<App content={content}/>, document.querySelector('#app'));