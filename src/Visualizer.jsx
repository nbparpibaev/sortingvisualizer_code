import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'

import "./Visualizer.css";
class Visualizer extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                newArray: false
            };
           // this.handleNewArray = this.handleNewArray.bind(this);
    }

    // handleNewArray() {
    //     this.setState({
    //         newArray: !this.state.newArray
    //     });
    // }

    render() {
        return (
            <div className = "Visualizer">
                <SortingVisualizer />
            </div>
        );
    }
}
export default Visualizer;