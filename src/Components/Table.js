import React,{useState} from 'react';
import Row from './Row';
import '../index.css';
import {dataBook} from '../Data/Data';
function Table() {
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
                  dataBook.map((item)=>{
                      return <Row id={item.id} title={item.title} nbpages={item.nbpages} author={item.author} category={item.category}/>
                  })
              }
          </tbody>
      </table>
    </div>
  );
}

export default Table;