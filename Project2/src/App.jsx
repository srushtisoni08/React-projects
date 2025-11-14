import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {
  const [count, setCounter] = useState(0)
  const addValue = () => {
		//count = count + 1;
    if (count < 20)
    {
      setCounter(count + 1)
    }
	}
	const handleRemove = () => {
    if (count>0){
      setCounter(count-1)
    }
	}
  let arr = [66, 77, 88];
 
  return (
    // <>
    //   <h1>Counter App</h1>
    //   <h2>Counter Value : {count}</h2>
    //   <button onClick={addValue}>
    //     Add
    //   </button>
    //   <button onClick={handleRemove}>
    //     Remove
    //   </button>
    // </>
    <>
      <h1 className='bg-sky-500 rounded-xl'> Tailwind Test</h1>
      <Card1 myObject = {arr} name = "srushti" counter = {count} onAdd={addValue}/>
      <Card1 name = "sexy" counter= {count} myObject = {arr}/>
    </>
  )
}

export default App
