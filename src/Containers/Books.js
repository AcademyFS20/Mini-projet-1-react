import React, { Component } from 'react';
import {dataBook} from '../Data/Data';
import Row from '../Components/Row';
class Books extends Component {
    state={
        databook:dataBook
    }
    render() {
        return (
            <div className="App">
              <table className="table table-bordered">
                  <thead>
                      <tr>
                          <th>Book Name</th>
                          <th>Autor</th>
                          <th>Category</th>
                          <th>NB pages</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      { 
                          this.state.databook.map((item)=>{
                              return <Row id={item.id} title={item.title} nbpages={item.nbpages} author={item.author} category={item.category}/>
                          })
                      } 
                  </tbody>
              </table>
            </div>
          );
    }
}

export default Books;