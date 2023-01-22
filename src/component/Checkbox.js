import React from 'react'

export default function Checkbox({ className,text,...rest}) {
  const margindimu={
    margin: "10px"
  }
  return (
    <label style={margindimu}>
        <input type= 'checkbox'{...rest}/>
        <span style={margindimu}>{text}</span>

    </label>
  )
}
