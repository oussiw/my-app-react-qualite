import React,{Component} from 'react';
import axios from 'axios';

class addForm extends Component{

    state = {
        id:0,
        firstName: {
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder: 'Your first name'
            },
            validation: {
                required: true
            },
            valid: false,
            showError: false,
            value:''
        },
        lastName:{
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder: 'Your last name'
            },
            validation: {
                required: true
            },
            valid: false,
            showError: false,
            value:''
        },
        email:{
            elementType: 'input',
            elementConfig: {
                type:'email',
                placeholder: 'Your email'
            },
            validation: {
                required: true,
                emailCheck: true
            },
            valid: false,
            showError: false,
            value:''
        }
    }

    checkIfEmail (email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    checkValidity (value, rules) {
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.emailCheck){
            isValid = this.checkIfEmail(value) && isValid; 
        }
        return isValid;
    }

    updateProperty = (value, index, rules) =>{
        switch (index){
            case 0:
                this.setState({
                    firstName:{
                        elementType: 'input',
                        elementConfig: {
                            type:'text',
                            placeholder: 'Your first name'
                        },
                        validation: {
                            required: true
                        },
                        valid: this.checkValidity(value,rules),
                        showError: !this.checkValidity(value,rules),
                        value:value
                    }
                });
                break;
            case 1:
                this.setState({
                    lastName:{
                        elementType: 'input',
                        elementConfig: {
                            type:'text',
                            placeholder: 'Your last name'
                        },
                        validation: {
                            required: true
                        },
                        valid: this.checkValidity(value,rules),
                        showError: !this.checkValidity(value,rules),
                        value:value
                    }
                });
                break;
            case 2:
                this.setState({
                    email:{
                        elementType: 'input',
                        elementConfig: {
                            type:'text',
                            placeholder: 'Your email'
                        },
                        validation: {
                            required: true,
                            emailCheck: true
                        },
                        valid: this.checkValidity(value,rules),
                        showError: !this.checkValidity(value,rules),
                        value: value
                    }
                })
                break;
        }
    }

    addCustomer =()=>{
        if(this.state.email.valid && this.state.firstName.valid && this.state.lastName.valid){
            const customer = {
                id: this.state.id,
                firstName: this.state.firstName.value,
                lastName: this.state.lastName.value,
                email: this.state.email.value
            }
            axios.post('http://localhost:8080/customers/',customer)
                .then( response => {
                    console.log(response);
                })
        }
        else {
            this.updateProperty(this.state.firstName.value,0,this.state.firstName.validation);
            this.updateProperty(this.state.lastName.value,1,this.state.lastName.validation);
            this.updateProperty(this.state.email.value,2,this.state.email.validation);
        }
         
    }

    render(){
    return (
            <div>
                 <label>First Name: </label>
                 <input className="form-control mb-4 col-4" {...this.state.firstName.elementConfig} 
                        onChange={(event) => {this.updateProperty(event.target.value,0,this.state.firstName.validation)}} />
                { this.state.firstName.showError ?
                    <div className="alert alert-danger mt-1 col-4 " >
                    Invalid input
                </div> : null}
                 <label>Last Name: </label>
                 <input className="form-control mb-4 col-4" {...this.state.lastName.elementConfig} 
                        onChange={(event) => {this.updateProperty(event.target.value,1,this.state.lastName.validation)}} />
                 { this.state.lastName.showError ?
                    <div className="alert alert-danger mt-1 col-4">
                    Invalid input
                </div> : null}
                 <label>Email: </label>
                 <input className="form-control mb-4 col-4" {...this.state.email.elementConfig} 
                        onChange={(event) => {this.updateProperty(event.target.value,2,this.state.email.validation)}} />
                { this.state.email.showError ?
                    <div className="alert alert-danger mt-1 col-4" >
                    Invalid input
                </div> : null}
                <button type="submit" className="btn btn-info col-2" onClick={this.addCustomer} >Add customer</button> 
            </div>
        );
    }
}

export default addForm;