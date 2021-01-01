import React,{Component} from 'react';
import Customer from "../../Models/Customer";
import axios from 'axios';

class ListCustomer extends Component{    
    state = {
        customers:[]
    }

    // constructor(props){
    //     super(props);
    //     if(props !== undefined){
    //         this.setState = ({
    //             theCustomer: props.customer
    //         })
    //     }
    // }

    baseUrl = 'http://localhost:8080/customers';
    render(){
        return (
            <div className="container">
                
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map(customer =>{
                            return (<Customer key={customer.id} customer={customer}/>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    // getCustomer=(event)=>{
    //     props.theCustomer = chosenCustomer
    // }

    
    componentDidMount(){
        axios.get(this.baseUrl)
            .then( response => {
                this.setState({
                    customers:response.data._embedded.customers
                })
            }) 
    }

    componentDidUpdate(){
         axios.get('http://localhost:8080/customers')
            .then( response => {
                this.setState({
                    customers:response.data._embedded.customers
                })
            }) 
    }
}

export default ListCustomer;
