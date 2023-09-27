import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase as Increase_A, decrease as Decrease_A } from './Features/addition/addSlice'
import { increase as Increase_B, decrease as Decrease_B } from './Features/sub/subSlice'
import { fetchUser } from './Features/multi/userSlice'


const App = () => {

  const a = useSelector((state) => state.add.a)
  const b = useSelector((state) => state.sub.b)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  
  return (
    <div>
      <h1>a : {a} , b:{b}</h1>
      <button onClick={() => dispatch(Increase_A())}>increase A</button><button onClick={() => dispatch(Decrease_A())}>Decrease A</button><br />
      <button onClick={() => dispatch(Increase_B())}>increase b</button><button onClick={() => dispatch(Decrease_B())}>Decrease b</button><br />
      <ol>
        {user.loading && <div>loading.....</div>}
        {!user.loading && user.users.length ?

          user.users.map((data) => {
            return <li>{data}</li>
          })
          : null}
        {!user.loading && user.error ? <div>{user.error.message}</div> : null}
      </ol>

    </div>
  )
}

export default App
