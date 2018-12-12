import React, {Component} from 'react'
import DrinkDrop from "./DrinkDrop"
import SizeDrop from "./SizeDrop"
import ExtraDrop from './ExtraDrop'
import AddToCart from './AddToCart'

class Order extends Component { 
state = { coffees: [{style:'americano',selected:false,id:1,key:'coffees'},{style:'espresso',selected:false, id:2,key:'coffees'},{style:'cafe latte',selected:false,id:3,key:'coffees'},{style: 'cappuccino',selected:false, id:4,key:'coffees'},{style:'mocha',selected:false,id:5,key:'coffees'},{style:'hot chocolate',selected:false,id:6,key:'coffees'},{style:'Tea',selected:false,id:7,key:'coffees'},{style:'Green Tea',selected:false,id:8,key:'coffees'}],
          sizes:[{size:'small', selected:false, id: 1,key:'sizes'},{size:'medium',selected:false, id:2,key:'sizes'},{size:'large', selected:false, id:3,key:'sizes'},{size:'extra large', selected:false, id:4, key:'sizes'}],
          extras:[{style:'no extras', selected:false, id:1, key:'extras'},{style:'one sugar', selected:false, id:2, key:'extras'},{style:'two sugars', selected:false, id:3, key:'extras'},{style:'milk',selected:false, id:4,key:'extras'},{style:'vanilla syrup',selected:false,id:5,key:'extras'},{style:'caramel syrup',selected:false,id:6,key:'extras'}],
          displayDrink: this.props.orderInProgress,
          displaySize: false,
          displayExtras: false,
          displayCart: false,
          }
toggleSelected=(id, key)=>{
            let temp = this.state[key]
            if (this.state.displayDrink) {
              this.setState(prevState =>({
                displayDrink: !prevState.displayDrink,
                displaySize: !prevState.displaySize 
            }))}
            if (this.state.displaySize) {
              this.setState(prevState =>({
                displaySize: !prevState.displaySize,
                displayExtras: !prevState.displayExtras,
                displayCart: !prevState.displayCart
            }))}
            
            if (key !== 'extras'){temp.map((obj)=>
            obj.selected = false)}
            temp[id-1].selected = !temp[id-1].selected
            this.setState({
              [key]: temp
            })
            
            
          }
  resetMenus = () =>{
    if (this.state.displayCart){
      this.setState(prevState =>({
        displayDrink: prevState.displayDrink = false,
        displayCart: !prevState.displayCart,
        displayExtras:!prevState.displayExtras,      
      }))
    }
  }
  render(){  
  const {
    name,id,newOrderDisplay,handleCart,index,orderInProgress,currentOrder
  }=this.props;
  
  return (
    
      <div className="order">
       
        <div className = "order-boxes">
            {orderInProgress && currentOrder === id ? <span className ="order-name">{name}</span> : null}
            <DrinkDrop 
              title = "Drink"
              list = {this.state.coffees}
              toggleItem ={this.toggleSelected}
              displayDrink ={this.state.displayDrink}
            />
            <SizeDrop
            title = "Size"
            list = {this.state.sizes}
            toggleItem = {this.toggleSelected} 
            displaySize = {this.state.displaySize}
            />
            <ExtraDrop
            title = "Extras"
            list = {this.state.extras}
            toggleItem = {this.toggleSelected} 
            displayExtras = {this.state.displayExtras}
            />
            <AddToCart
            title = 'Add to Cart'
            coffees = {this.state.coffees}
            sizes = {this.state.sizes}
            extras = {this.state.extras}
            handleCart = {handleCart}
            index = {index}
            id = {id}
            displayCart = {this.state.displayCart}
            newOrderDisplay = {newOrderDisplay}
            resetMenus ={this.resetMenus}
            />
        </div>
      </div>
    );
  }
}

  export default Order;