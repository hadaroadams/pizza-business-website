import React from 'react'
import '../styles/MenuList.css'

function MenuList({image,title,price}) {
  return (

        <button className='menuButton'>
        <div className='menuList'>
            <div className='menuImage' style={{backgroundImage:`url(${image})`}}></div>
            <h1>{title}</h1>
            <p>${price}</p>
        </div>
        </button>
  )
}

export default MenuList
