import React from 'react';
import Boutton from './Boutton';
import '../index.css';
const Row = (props) => {
    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td>{props.nbpages}</td>
                <td>{props.author}</td>
                <td>{props.category}</td>
                <td className="td-btn">
                    <Boutton type="button" name="Update" classname="btn btn-warning"/>
                    <Boutton type="button" name="Delete" classname="btn btn-danger"/>
                </td>
            </tr>
        </>
    );
};

export default Row;