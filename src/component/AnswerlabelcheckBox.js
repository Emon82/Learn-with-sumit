import React from 'react'
import "../Styles/AnswerlabelcheckBox.css"

export default function AnswerlabelcheckBox({...rest}) {
  return (
    <div>  <label className="answer" for="option1">
    <input {...rest} />
    A New Hope 1
  </label></div>
  )
}
