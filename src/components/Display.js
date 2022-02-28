import React from 'react'

export const Display = ({textToDisplay}) => {

  
  return (
    <div id="resullt" className='result' > 
    {textToDisplay || '0.00'}
    </div>
  )
}
