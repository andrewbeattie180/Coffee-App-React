import React from 'react'

class SizeDrop extends React.Component {

render(){
    const{list,toggleItem,displaySize} =this.props
    return(
        displaySize ?
        <div className = "size menu-wrapper">
        <ul className='size menu-list'>
           {list.map((item)=>(
               <li className = "menu-item" key = {item.size} onClick ={()=> toggleItem(item.id,item.key)}>{item.size}{item.selected && '✔'}</li>
           ))} 
        </ul>
        </div>
        : null
    )
}
}

export default SizeDrop