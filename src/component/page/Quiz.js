import React from 'react'
import Answer from '../Answer'
import MiniPlayer from '../MiniPlayer'
import PrograssBar from '../PrograssBar'

export default function Quiz() {
  return (
    <div>
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answer/>
        <PrograssBar/>
        <MiniPlayer/>
        
    </div>
  )
}
