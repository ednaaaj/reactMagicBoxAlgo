import React, { Component } from 'react';
import GRID from './components/grid';

import './App.css';
class App extends Component {
    
    render() { 
        return (
        <div className="app">
            <div className="app-container">
                <h1 className="game-title">Magic Box</h1>
                <div className="instruction-container">
                    <div>Input any odd number from 1-20 only!</div>          
                </div>
                <GRID />      

            </div>
        </div>);
    }
}
 
export default App;