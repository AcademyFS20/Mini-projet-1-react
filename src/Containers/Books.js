import React, { Component } from 'react';
import {dataBook} from '../Data/Data';
import Form from './Form';
import Row from '../Components/Row';
import Boutton from '../Components/Boutton';
class Books extends Component {
    state={
        databook:dataBook,
        bool:true
    }
    render() {
        let name="create";
        if(this.state.bool===true)
        {
            name="close";
        }
        return (
            <div className="App">
              <table className="table table-bordered">
                  <thead>
                      <tr>
                          <th>Book Name</th>
                          <th>Nb pages</th>
                          <th>Author</th>
                          <th>Category</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      { 
                          this.state.databook.map((item)=>{
                              return <Row data={this.state.databook} id={item.id} title={item.title} nbpages={item.nbpages} author={item.author} category={item.category} onclick={(value)=>{this.setState({databook:value})}}/>
                          })
                      } 
                  </tbody></table>
                  {
        this.state.bool===true && <Form data={this.state.databook} onclick={(value)=>{this.setState({databook:value})}}/>
        }
      <Boutton type="button" classname="btn btn-success" name={name} onclick={()=>{this.setState({bool:!this.state.bool})}}/>
              
            </div>
          );
    }
}

export default Books;