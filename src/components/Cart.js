import React from 'react'

class Cart extends React.Component{
    render(){
        
        const extras = this.props.extras.join(', and ');
        return (
            <div className = 'cart-entries'> 
                <button className="remove-order" onClick={() => this.props.removeOrder(this.props.id)}>✖</button>
                {this.props.name} wants a {this.props.size} {this.props.drink} with {extras}
            </div>
        )
    }
}

export default Cart;