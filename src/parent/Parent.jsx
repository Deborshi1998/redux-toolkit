import React from 'react'
import Child from './child/Child'
import { useSelector } from 'react-redux';
import { parentColor } from "../store/features/parentSlice";
function Parent() {
    const color = useSelector(parentColor);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        backgroundColor: color,
        height: "300px",
      }}
    >
      <h1>Parent</h1>
      <Child />
    </div>
  );
}

export default Parent