import React, {useContext} from 'react'
import { Mycontext } from './App'

export default function Header() {
    const { handleContext } = useContext(Mycontext);
  return (
    <div>
        <button onClick={handleContext}>Click</button>
    </div>
  )
}
