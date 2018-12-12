import React from 'react'

class ExtraDrop extends React.Component {

render(){
    const{list,toggleItem,displayExtras} =this.props
    return(
        displayExtras ?
        <div className = "extra menu-wrapper">
        <ul className='menu-list'>
           {list.map((item)=>(
               <li className = "menu-item" key = {item.style} onClick ={()=> toggleItem(item.id,item.key)}>{item.style}{item.selected && '✔'}</li>
           ))} 
        </ul>
        </div>
        :null
    )
}
}

export default ExtraDrop;