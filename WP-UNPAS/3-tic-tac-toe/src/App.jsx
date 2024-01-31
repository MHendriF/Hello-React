// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

function Square() {
  const [value, setValue] = useState('');

  function handleClick() {
    setValue('X');
  }

  return <button className='square' onClick={handleClick}>{ value }</button>
}

export default function Board() {
 
  return (
    <div className='board'>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}