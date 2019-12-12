import React, { Component } from 'react';

class error extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <span className="error">{this.props.error}</span>
            </div>
         );
    }
}
 
export default error;