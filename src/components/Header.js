import React from 'react';

const Header = (props) => {

    return (
      <header>
      {props.orderInProgress ? null:
      <span className = 'refresh-randName' role ='img' aria-label = 'refresh' onClick = {() => {props.handleRandName()}}>⟳</span>}
        <div className = 'main-header'>
          <h1>
            <span role='img' aria-label="coffee">☕</span>
              coffee_drop
            <span role='img' aria-label="coffee">☕</span> </h1>
             {props.noOrders ? null:<p>It is {props.randName}'s turn to get the brews in</p>}
        </div>
        {props.orderInProgress ? null :
        <div className = 'open-cart-button'>
       {props.hideCart ? <span role='img' aria-label="shopping-cart" onClick = {()=>{props.cartPress()}}>🛒</span>
                       : <span role='img' aria-label="return-arrow" onClick = {()=>{props.cartPress()}}>↻</span>}
        </div>}
      </header>
    );
  }

export default Header;