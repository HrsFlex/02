import React from 'react'

const App = () => {

  const [count, setCount] = React.useState(0);
  console.log(count);
  console.log(setCount);
const handleClickInc = () => {
  setCount(count + 1);
}
const handleClickDec = () => {
  setCount(count - 1);
}

  return (
    <div>
      <h1 className='text-4xl'>{count}</h1>
      <button className='btn btn-outline-primary ' onClick={handleClickInc}>+</button> 
      <button className='btn btn-outline-primary ' onClick={handleClickDec}>-</button>
    </div>
    
  )
}

export default App
