import React from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import render  from '@testing-library/react';

const options = [
  'narwhal',
  'rhino',
  'unicorn',
  'unilego',
  'triceritops',
  'markhor',
  'mouflon',
  'addax',
  'chameleon',
  'lizard',
  'dragon'
]

class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }

  handleDropDown = (e) => {
    const keyword = e.target.value;
    this.setState({ keyword })
  
  }

  handleHorns = (e) => {
    const horns = e.target.value;
    this.setState({ horns })
  }

 

render() {
  const keyImages = images.filter(image => image.keyword === this.state.keyword)
  const hornImages = images.filter(image => image.horns === Number(this.state.horns))
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <select onChange={this.handleDropDown}>
          {
            options.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
          }
        </select>
        <select onChange={this.handleHorns}>
          {
            options.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
          }
        </select>
        
      <div className="gallery">
        <ImageList images={keyImages}/>
        <ImageList images={hornImages}/>
      </div>
    </div>
  )
}
}
export default App