import React from 'react';
import Boutton from './Boutton';
import '../index.css';
const Row = (props) => {
    const removeItem=(e)=>{
        e.target.parentElement.parentElement.remove();
        // console.log(e.target.value)
    }
    return (
        <>
            <tr className="table-row">
                <td>{props.title}</td>
                <td>{props.nbpages}</td>
                <td>{props.author}</td>
                <td>{props.category}</td>
                <td className="td-btn">
                    <Boutton type="button" name="Update" classname="btn btn-warning"/>
                    <Boutton type="button" name="Delete" value={props.id} classname="btn btn-danger" onclick={removeItem}/>
                </td>
            </tr>
        </>
    );
};

export default Row;