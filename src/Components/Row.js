import React,{useState} from 'react';
import Boutton from './Boutton';
import '../index.css';
import swal from 'sweetalert';
import Formint from '../Containers/Formint';
import Formselec from '../Containers/Formselec';

const Row = (props) => {
    const [toggle,setToggle]=useState(true);
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
                <td>{(toggle)?props.title:<Formint value={props.title}/>}</td>
                <td>{(toggle)?props.nbpages:<Formint value={props.nbpages}/>}</td>
                <td>{(toggle)?props.author:<Formint value={props.author}/>}</td>
                <td>{(toggle)?props.category:<Formselec value={props.category}/>}</td>
                <td className="td-btn">
                {(toggle)?<Boutton type="button" name="Update" classname="btn btn-warning" onclick={()=>{setToggle(false)}}/>:null}
                {(toggle)?<Boutton type="button" name="Delete" value={props.id} classname="btn btn-danger" onclick={removeItem}/>:null}
                {(toggle)?null:<Boutton type="button" name="save" classname="btn btn-info" onclick={()=>{setToggle(true)}}/>}
                </td>
            </tr>
        </>
    );
};

export default Row;