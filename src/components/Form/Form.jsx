import React, {Component} from "react";
import { nanoid } from 'nanoid';
import { FormContainer, FormLabel, FormInput, FormButton } from "./Form.styled";



export class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    formNameId = nanoid();
    formNumberId = nanoid();

    

    handleInputChange = event => {   
     const { name, value } = event.currentTarget;
     this.setState({
       [name]: value
     });
    };
    
    handleSubmit = event => {
        event.preventDefault();            
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
      this.setState({
        name: '',
        number: ''
      });
    };
    
    render() {
        return (                      
            <FormContainer onSubmit={this.handleSubmit}>              
                <FormLabel htmlFor={this.formNameId}>Name
                <FormInput type="text" id={this.Id} name="name" value={this.state.name} onChange={this.handleInputChange} />          
                </FormLabel>
              
                <FormLabel htmlFor={this.formNumberId}>Number
                <FormInput type="tel" id={this.formNumberId} name="number" value={this.state.number} onChange={this.handleInputChange} />
                </FormLabel>
              <FormButton type="submit">Add contact</FormButton>
            </FormContainer>            
        )
    }
}