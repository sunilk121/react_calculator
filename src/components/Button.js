import React from 'react'

export const Button = ({item, handleOnClick}) => {
  
  return <button 
  className={item.cls}
  onClick= {()=>handleOnClick(item.label)} className={item.cls}
  > {item.label}</button>
  
}
