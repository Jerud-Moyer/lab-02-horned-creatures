import React, { Component } from 'react';
import images from './data.js';
import ImageList from './ImageList';
import Img from './Img.js';

const keyWords = [  "unilego",  "triceratops",  "narwhal",  "rhino",  "unicorn",  "markhor",  "addax",  "mouflon",  "chameleon",  "lizard",  "dragon"]



class DropDown extends Component {
state = {
    keyword: ''
}
dropHandler = (e) => {
    const data = e.target.value;
    this.setState({ keyword: data })
}
    render() {
        const filteredImages = images.filter(image => image.keyWord === this.state.keyword)
        console.log(this.state);
        return (
        <>
        <ImageList images={filteredImages} />
        <select onChange={this.dropHandler}>
            {
                keyWords.map(image => <li>{Img}</li>)
            }
        </select>
        </>
        )
    }
}

export default DropDown;


