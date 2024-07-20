import React from 'react'

function Task({props}) {

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style={props.isDone ? { textDecoration: 'line-through' } : {}}>
             {props.name}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
    </div>
  )
}

export default Task