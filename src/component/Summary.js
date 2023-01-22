import React from 'react'
import "../Styles/Summary.css"
import image from '../Images/success.png'

export default function Summary() {
  return (
    <div class="summary">
      <div class="point">
        {/* <!-- progress bar will be placed here --> */}
        <p class="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class="badge">
        <img src={image} alt="Success" />
      </div>
    </div>
  )
}
