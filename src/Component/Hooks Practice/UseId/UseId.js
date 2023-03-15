import React, { useId } from 'react'

const UseId = () => {
    const passwordHintId = useId();
    console.log(passwordHintId);
    console.log(useId());
    console.log(useId());
  return (
    <div>
        <input type="password" aria-describedby={passwordHintId}/>
        <p id={passwordHintId}> The password should contain at least 18 characters</p>
    </div>
  )
}

export default UseId