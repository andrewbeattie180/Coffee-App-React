import React, { Component } from 'react';
import "./App.css"
import Header from './components/Header'
import Order from './components/Order'
import AddOrder from './components/AddOrder'
import Cart from './components/Cart'


class App extends Component {
  state ={
    noOrders: true,
    orders: [],
    hideCart: true,
    displayAddOrder: true,
    orderInProgress: false,
    currentOrder:1
  }
  
  handleCartPress = ()=>{
    this.setState(prevState =>({
      hideCart: !prevState.hideCart
    }))
  }

  handleAddOrder = (name) =>{
    let newOrder = {
      name: name, id: this.prevOrderID +=1, drink: '', size: "", extras: [],
    };
    if(newOrder.name !== ''){
    this.setState(prevState => ({
      orders:prevState.orders.concat(newOrder),
      orderInProgress: prevState.orderInProgress = true
    }))
    this.handleAddOrderDisplay()}
  }

  handleCart = (index,id,array1,array2) =>{
    this.state.orders.map((customer)=>{
      if (customer.id === id){
        this.setState(prevState=> ({
          drink: prevState.orders[index].drink = (array1[0]),
          size: prevState.orders[index].size = (array1[1]),
          extras: prevState.orders[index].extras = (array2),
          noOrders: prevState.noOrders = false,
          currentOrder: prevState.currentOrder += 1,
          randName:""
        }))
      }return customer})
      this.handleRandName();
      console.log(this.state.orders)
      }

  handleRandName =() =>{
    let names =[];
    this.state.orders.map((customer)=>
    names.push(customer.name))
    let randIndex = Math.floor(Math.random()*names.length)
    console.log(randIndex)
    let randName = names[randIndex];
    this.setState(prevState =>({
      randName: prevState.randName =randName
    }))
  }
  handleAddOrderDisplay =()=>{
    this.setState(prevState => ({
      displayAddOrder: !prevState.displayAddOrder,
      orderInProgress: prevState.displayAddOrder
      
    }))
  }
  handleRemoveOrder = (id) => {
    this.setState( prevState => {
      return {
        orders: prevState.orders.filter(p => p.id !== id)
      };
    })
    if (this.state.orders.length === 1){
      this.setState( prevState => {
        return{
          noOrders: !prevState.noOrders
        }
      })
    }
  }
  prevOrderID = 0;
  
  render() {
    return (
      <div className="App">
        <Header 
          randName = {this.state.randName}
          handleRandName = {this.handleRandName}
          noOrders = {this.state.noOrders}
          cartPress = {this.handleCartPress}
          hideCart = {this.state.hideCart}
          orderInProgress = {this.state.orderInProgress}
        />
       {this.state.hideCart ?
        <div>
       {this.state.orders.map((order,index) =>
          <Order 
            name={order.name}
            id={order.id}
            key={order.id.toString()}
            index = { index } 
            toggleSelected = {this.toggleSelected}
            removeOrder = {this.handleRemoveOrder}
            handleCart = {this.handleCart}
            newOrderDisplay = {this.handleAddOrderDisplay}
            orderInProgress = {this.state.orderInProgress}
            currentOrder = {this.state.currentOrder}
          />
          )}
          <AddOrder
            displayAddOrder = {this.state.displayAddOrder}
            addOrder = {this.handleAddOrder}
          />
          </div>
           : 
          this.state.orders.map((order,index) =>
          <Cart 
            name={order.name}
            id={order.id}
            key={order.id.toString()}
            index = { index } 
            drink = {order.drink}
            size = {order.size}
            extras = {order.extras}
            displayCart = {this.state.displayCart}
            orders = {this.state.orders}
            removeOrder = {this.handleRemoveOrder}
          />)}
       
      </div>
    );
  }
}

export default App;

