import React, { Component } from 'react'

export default class Img extends Component {
    render() {
        
        return (
            <div>
         
            <img alt="random" key={this.props.image.title} src={this.props.image.url}/>
        
            </div>
        )
    }
}
