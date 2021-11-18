import React,{useState} from 'react';
import Boutton from './Boutton';
import '../index.css';
import swal from 'sweetalert';
import Formint from '../Containers/Formint';
import Formselec from '../Containers/Formselec';

const Row = (props) => {
    const [toggle,setToggle]=useState(true);
    const [title,setTitle]=useState(props.title);
    const [nbrepages,setNbrepages]=useState(props.nbpages);
    const [author,setAuthor]=useState(props.author);
    const [category,setCategory]=useState(props.category);
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
              props.data.filter((item)=>{
                if(item.id===props.id)
                {
                  delete props.data[item.id-1]
                  props.onclick(props.data)
                }
              })
              swal("The row has been deleted!", {
                icon: "success",
              });
            } else {
              swal("The row is live");
            }
          });
    }
    return (
        <>
            <tr className="table-row">
                <td>{(toggle)?props.title:<Formint value={props.title} onchange={(value)=>{setTitle(value)}}/>}</td>
                <td>{(toggle)?props.nbpages:<Formint value={props.nbpages} onchange={(value)=>{setNbrepages(value)}}/>}</td>
                <td>{(toggle)?props.author:<Formint value={props.author} onchange={(value)=>{setAuthor(value)}}/>}</td>
                <td>{(toggle)?props.category:<Formselec value={props.category} onchange={(value)=>{setCategory(value)}}/>}</td>
                <td className="td-btn">
                {(toggle)?<Boutton type="button" name="Update" classname="btn btn-warning" onclick={()=>{setToggle(false)}}/>:null}
                {(toggle)?<Boutton type="button" name="Delete" value={props.id} classname="btn btn-danger" onclick={removeItem}/>:null}
                {(toggle)?null:<Boutton type="button" name="save" classname="btn btn-info" onclick={(value)=>{setToggle(true);console.log(title);props.data[props.id-1]={id:props.id,title:title,nbpages:nbrepages,author:author,category:category };props.onclick(props.data);}}/>}
                </td>
            </tr>
        </>
    );
};

export default Row;