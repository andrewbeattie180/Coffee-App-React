import React from 'react'

class AddToCart extends React.Component {

        handleAddtoCart = () => {
            let cart = []
            let extrasCart = []

            this.props.coffees.map((coffee) => {
                if (coffee.selected === true) {
                    cart.push(coffee.style)
                }
                return cart;
            })

            this.props.sizes.map((size) => {
                if (size.selected === true) {
                    cart.push(size.size)
                }
                return cart;
            })

            this.props.extras.map((extra) => {
                if (extra.selected === true) {
                    extrasCart.push(extra.style)
                }
                return extrasCart
            })
            // console.log(cart)
            // console.log(extrasCart)
            // console.log('ID:' + this.props.id)
            // console.log('index:' +this.props.index)
            this.props.handleCart(this.props.index, this.props.id, cart, extrasCart)
            this.props.newOrderDisplay()
            this.props.resetMenus();
        }

    
render(){
    return(
        this.props.displayCart ?
        <div className = 'submit menu-wrapper'>
            <div className = 'menu-header'>
                <span className = 'cart' onClick = {()=>{this.handleAddtoCart()}}>add to cart</span>
            </div>
        </div>
        :null
    )
}
}
export default AddToCart