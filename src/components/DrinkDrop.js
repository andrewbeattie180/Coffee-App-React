import React from 'react'

class DrinkDrop extends React.Component {

render(){
    const{list,toggleItem,displayDrink} = this.props
    return(
        displayDrink? 

        <div className = "drink menu-wrapper">

        <ul className='menu-list'>
           {list.map((item)=>(
               <li className = "menu-item" key = {item.style} onClick ={()=> toggleItem(item.id,item.key)}>{item.style}{item.selected && '✔'}</li>
           ))} 
        </ul>
        </div>

        : null
    )
}
}

export default DrinkDrop;