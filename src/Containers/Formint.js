import React, { Component } from 'react';

class Formint extends Component {
    state={
    value:this.props.value
}
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})
            this.props.onchange(e.target.value);console.log(e.target.value)}}/>
            </div>
        );
    }
}

export default Formint;