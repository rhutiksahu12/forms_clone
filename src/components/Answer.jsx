import React from 'react'
import { useState } from 'react'

const Answer = () => {
    const answerType = ["checkbox", "radio", "textarea"]

    const [answer, setAnswer] = useState({
        Answer: "",    
        AnswerType: answerType
    });


  return (
    <div>
        
    </div>
  )
}

export default Answer