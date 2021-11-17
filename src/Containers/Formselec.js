import React, { Component } from 'react';

class Formselec extends Component {
    render() {
        return (
            <div>
                <select value={this.props.value}>
                    <option value="fantasy">Fantasy</option>
                    <option value="classics">Classics</option>
                    <option value="Literally fiction">Literally fiction</option>
                </select>
            </div>
        );
    }
}

export default Formselec;