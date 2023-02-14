import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducers/Updown'

const Reduxapp = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <br/><br/>
        <div className='container'>
      <div>
        <button type="button" className="btn btn-primary" aria-label="Increment value" onClick={() => dispatch(increment())} >
          Increment
        </button> &nbsp; &nbsp;
        <span>{count}</span>&nbsp; &nbsp;
        <button type="button" className="btn btn-primary" aria-label="Decrement value" onClick={() => dispatch(decrement())} >
          Decrement
        </button>
      </div>
    </div>
    </>
  )
}

export default Reduxapp