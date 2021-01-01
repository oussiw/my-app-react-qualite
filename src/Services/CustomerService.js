import axios from 'axios';
class CustomerService {

    baseUrl = 'http://localhost:8080/customers/';
    
    getCustomers = () =>{
        axios.get(this.baseUrl)
            .then(response=>{
                console.log(response);
            });
    }
}

export default CustomerService;