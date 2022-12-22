import  MenuList  from '../components/MenuList'
import React from 'react'
import { Menudata } from '../Helper/MenuData'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1>Our Menu</h1>
       <div className='menuItem'>
          {Menudata.map((menuItems ,key)=>{
            return (
              <MenuList key={key} image={menuItems.image} title={menuItems.name} price={menuItems.price}/>)
          }
          )}
       </div>
    </div>
  )
}

export default Menu
