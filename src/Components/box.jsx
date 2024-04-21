import React from 'react'

function box({value, onBoxClick} ) {
  
  return (
    <button onClick={onBoxClick} className='w-28 h-28 bg-slate-900 text-white rounded-lg text-5xl font-semibold m-1 '>{value}</button>
  )
}

export default box