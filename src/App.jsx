import React from 'react'
import { Button } from './components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { increament,decreament,increamentByAmount } from './features/counter/counterSlice'
import ProductList from './features/productList/productList'

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
    <h1>value:{count}</h1>
    <Button onClick={()=> dispatch(increament())}>+</Button>
    <Button onClick={()=> dispatch(decreament())}>-</Button>
    <Button 
      onClick={()=> dispatch(increamentByAmount([{'name': 'jagdeesh'},{'name': 'pankaj'}]))}
    >
      +5
    </Button>

    <ProductList/>    
    </>
  )
}

export default App
