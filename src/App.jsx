import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const App = () => {

  const dispatch=useDispatch()

  const count=useSelector((state)=>state.counter.value)

  const [num, setNum] = useState(5)




  return (
    <div>
      
    </div>
  )
}

export default App
