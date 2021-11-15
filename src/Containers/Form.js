import React, { Component } from 'react';
import Boutton from '../Components/Boutton';

class Form extends Component {
    state = {
        bookname:"",
        authorname:"",
        nbrepages:0,
        value:"fantasy"
    }
    render() {
        return (
            <div className="container">
                <form className="form">
                    <h2>Book info</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Book name*" onChange={(e)=>{this.setState({bookname:e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="author name*" onChange={(e)=>{this.setState({authorname:e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="0" onChange={(e)=>{this.setState({nbrepages:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="">Category:</label>
                        <select className="form-group" value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}>
                            <option value="fantasy">Fantasy</option>
                            <option value="classics">Classics</option>
                            <option value="Literally fiction">Literally fiction</option>
                        </select>
                    </div>
                    <Boutton type="submit" name="validate" classname="btn btn-secondary"/>
                </form>
            </div>
        );
    }
}

export default Form;