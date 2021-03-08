import React from 'react';
import Footer from '../Footer.jsx';
import Navbar from '../Navbar.jsx';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';


const PRIMARY_COLOR = "#06918b";

const SECONDARY_COLOR = '#ce144f';

export default class SortingVisualizer extends React.Component {
    
    constructor(props) {
    super(props);

    this.state = {
      array: [],
      size:100,
    };
    this.resetArray = this.resetArray.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.reverseArray = this.reverseArray.bind(this);
  }



  componentDidMount() {
    this.resetArray();
  }

  reverseArray() {
      var newArray = this.state.array.sort((a, b) => b-a);
      this.setState({
          array: newArray
      });
  }

  handleSize(newSize) {
      this.setState({
          size: newSize
      }, ()=> {
          this.resetArray();
      });
      console.log(`${newSize} items`);
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.size; i++) {
      array.push(randomIntFromInterval(10, 700));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 300000 / Math.pow(this.state.size, 2));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 300000 / Math.pow(this.state.size, 2));
      }
    }
  }

  render() {
    const {array} = this.state;

    const bars = array.map((value, idx) => (
        <div
            className="array-bar"
            key={idx}
            style={{
            backgroundColor: PRIMARY_COLOR,
            height: `${value}px`,
            width: `${900 / this.state.size}px`,
            margin:`${1}px`
            }}></div>
        ));
    return (
    <div className="Visualizer">
        <Navbar 
            handleNewArrayButton={this.resetArray}
            handleReverseButton = {this.reverseArray}
            handleMergeSortButton = {this.mergeSort}
            handleSlider = {this.handleSize}
            
        />
        <div className="array-container">
            {bars}
        </div>
        <Footer />
    </div>
    );
  }
}


function randomIntFromInterval(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}
