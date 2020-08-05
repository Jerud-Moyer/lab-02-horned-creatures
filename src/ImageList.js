import React, { Component } from 'react';
import Img from './Img.js';



export default class ImageList extends Component {
    render() {
        const imageArray = this.props.images;
        console.log(imageArray);
        return (
            <div>
                {imageArray.map((image) => {
                    return <Img key={this.props.title} image={image}/>
                })}
            </div>
        )
    }
}

