import React from 'react'

export default function Footer(props) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {props.year} {props.name} {props.studentID}
        </p>
        <props className="year"></props>
        <props className="name"></props>
        <props className="studentID"></props>
        
      </div>
  )
}
