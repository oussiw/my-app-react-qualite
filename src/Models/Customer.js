import React from 'react';
// import axios from 'axios';

const customer = (props)=>{

    // let deleteCustomerHandler = ()=>{
    //     axios.delete('http://localhost:8080/customers/' + props.customer.id)
    //         .then( response => {
    //             console.log(response);
    //         }) 
    // }

    return (
        <tr>
            <td className="align-middle">{props.customer.id}</td>
            <td className="align-middle">{props.customer.firstName}</td>
            <td className="align-middle">{props.customer.lastName}</td>
            <td className="align-middle">{props.customer.email}</td>
            <td>
                <button className="btn btn-info">Update</button>
                |
                <button className="btn btn-info">Delete</button>
            </td>
        </tr>
    );    
}

export default customer;
