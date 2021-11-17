import React, { Component } from 'react';
import Boutton from '../Components/Boutton';
import '../index.css';
class Form extends Component {
    state = {
        bookname:"",
        authorname:"",
        nbrepages:0,
        category:"fantasy",
        errorName:"",
        errorAuthor:"",
        errorPages:"",
    }
    validate=(e)=>
    {
        let valid=true;
        e.preventDefault();
        if(this.state.bookname==="")
        {
            this.setState({errorName:'Il manque le nom du book'});
            valid=false;
        }
        if(this.state.authorname==="")
        {
            this.setState({errorAuthor:"Il manque l'auteur du book"});
            valid=false;
        }
        if(this.state.nbrepages===0)
        {
            this.setState({errorPages:'Il manque le nbre de pages'});
            valid=false;
        }
        if(valid)
        {
            this.props.data.push({id:4,
                title : this.state.bookname,
                nbpages : this.state.nbrepages,
                author:this.state.authorname,
                category:this.state.category})
            this.setState({databook:this.props.data})
        }
    }
    render() {
        return (
            <div className="container">
                <form className="form">
                    <h2>Book info</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Book name*" onChange={(e)=>{this.setState({bookname:e.target.value})}}/>
                        <p>{this.state.errorName}</p>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="author name*" onChange={(e)=>{this.setState({authorname:e.target.value})}}/>
                        <p>{this.state.errorAuthor}</p>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="0" onChange={(e)=>{this.setState({nbrepages:e.target.value})}}/>
                        <p>{this.state.errorPages}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select className="form-control" value={this.state.category} id='category' name='category' onChange={(e)=>{this.setState({category:e.target.value})}}>
                            <option value="fantasy">Fantasy</option>
                            <option value="classics">Classics</option>
                            <option value="Literally fiction">Literally fiction</option>
                        </select>
                    </div>
                    <Boutton type="submit" name="validate" classname="btn btn-secondary" onclick={this.validate}/>
                </form>
            </div>
        );
    }
}
export default Form;