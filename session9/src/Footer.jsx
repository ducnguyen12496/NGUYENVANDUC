import React from 'react'
import { Mycontext } from './App';
import { useContext } from 'react';

export default function Footer() {
    const { handleContext } = useContext(Mycontext);
    const {pageConfig} = useContext();
  return (
    <div>
        <h1>Footer</h1>
        <button onClick={handleContext}>Click</button>
    </div>
  )
}
