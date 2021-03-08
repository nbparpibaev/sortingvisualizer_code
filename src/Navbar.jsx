import React, { Component } from 'react'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 100,
        }
        this.changeSize = this.changeSize.bind(this);
    }

    changeSize(newSize) {
        this.props.handleSlider(newSize);
    }

    render() {
        return (
            <div className="Navbar">
                <div className="buttonsContainer">
                    <button className="items createNewArray" 
                     onClick={this.props.handleNewArrayButton}>Create New Array</button>
                    <button className="items createNewArray"
                     onClick={this.props.handleReverseButton}> Reverse</button>
                    <button className="items createNewArray"
                     onClick={() => this.props.handleMergeSortButton()}>Merge Sort</button>
    
                </div>
                <div className="slider">
                    <span className="text Slider">Array size</span>
                    <Slider className="Slider"
                        defaultValue={this.state.size}
                        min={30}
                        max={350}
                        onAfterChange={this.changeSize}
                    />
                </div>
            </div>
        );
    }
}
export default Navbar;