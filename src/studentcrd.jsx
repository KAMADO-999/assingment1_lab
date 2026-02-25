import React from 'react'

const studentcrd = ({name,age,course}) => {
  return (
    <div style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
        <h3>Name:{name}</h3>
        <p>Age:{age}</p>
        <p>Cousre:{course}</p>
    </div>
  );
}

export default studentcrd