import React, { Component } from 'react';

class Formselec extends Component {
    state={
        value:this.props.value
    }
    render() {
        return (
            <div>
                <select value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value});this.props.onchange(e.target.value)}}>
                    <option value="fantasy">Fantasy</option>
                    <option value="classics">Classics</option>
                    <option value="Literally fiction">Literally fiction</option>
                </select>
            </div>
        );
    }
}

export default Formselec;