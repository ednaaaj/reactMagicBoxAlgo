import React, { Component } from 'react';
import './grid.css';
import BOX from './box';
import ERROR from './error';
import { timingSafeEqual } from 'crypto';


class grid extends Component {
    state = { 
        keyValue: '',
        erroValue: '',
        itemsArray: [],
        go: false,
        check: false
     }

    handler = (event) => {

        
       
             this.setState({keyValue: event.target.value});
             if(event.target.value % 2 !== 0){
                this.setState({go: true});
             }else{
                this.setState({go: false});
             }
        
    }
    chunkOdd = (input) => {
        let chunk= [];

        for(let i = 1; i <= input; i++){
            chunk.push(i);
        }

        this.setState({itemsArray: chunk});
    }

    keyDown = event => {
        if(event.which === 13 || event.keyCode === 13){
           if(this.state.keyValue % 2 != 0 && (this.state.keyValue > 0 && this.state.keyValue < 20)){
               this.setState({erroValue: '',check: true});
               
               
            }                
           else{
                this.setState({erroValue: "Please input odd number 1-20 only!!"});
                this.setState({check: false});
            }

        }
    }


    

    render() {

        return ( 
            
        <div>
        <div>
                <input type="text"  value={this.state.keyValue} onChange={this.handler} onKeyDown={this.keyDown} placeholder="Hit Enter!!!" />
                
                <ERROR error={this.state.erroValue} />
        </div> 
        <div className="grid-container">
            <div className="grid">
                
                {this.state.go && this.state.check? <BOX render={this.state.go} go={this.state.check} odd={this.state.keyValue} /> : null}
                
            </div>
        </div>
        </div> );
    }
}
 
export default grid;


