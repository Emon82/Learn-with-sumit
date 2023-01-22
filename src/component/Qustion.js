import React from 'react'
import Answer from "../component/Answer"
import "../Styles/Qustion.css"
export default function Qustion() {
  return (
 <div class="question">
    <div class="qtitle">
      <span class="material-icons-outlined"> help_outline </span>
      Here goes the question from Learn with Sumit?
    </div>
    <Answer/>
    </div>
  )
}
