import React, {Component} from 'react';

class AddOrder extends Component{
    orderInput = React.createRef();

    handleSubmit = (e) =>{ //callback function
        e.preventDefault();
        let textInput = this.orderInput.current.value;
        let lowerCaseTextInput = textInput.toLowerCase();
        let inputCapitalized = lowerCaseTextInput.charAt(0).toUpperCase()+lowerCaseTextInput.slice(1);
        this.props.addOrder(inputCapitalized); 
        e.currentTarget.reset();
    }
    render (){
        return(
            this.props.displayAddOrder ?
            <form onSubmit = {this.handleSubmit}>
                <input 
                type = 'text'
                ref = {this.orderInput}
                placeholder = "New Customer Name"
                />
                <input
                type = 'submit'
                value = 'Start Order'
                />
            </form>
            : null
        )
    }
}


export default AddOrder;