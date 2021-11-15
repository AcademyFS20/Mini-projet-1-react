import React from 'react';
import Boutton from './Boutton';
import '../index.css';
import swal from 'sweetalert';
const Row = (props) => {
    const removeItem=(e)=>{
        swal({
            title: "Are you sure?",
            text: "Do you want to delete the row",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            e.target.parentElement.parentElement.remove();
              swal("The row has been deleted!", {
                icon: "success",
              });
            } else {
              swal("The row is live");
            }
          });
        // e.target.parentElement.parentElement.remove();
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