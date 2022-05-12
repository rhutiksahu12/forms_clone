import React from 'react'
import { useState } from 'react'

const Answer = ( { question, setQuestion } ) => {

  const [answer, setAnswer] = useState();


  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">Answer</span>
        
        Switch(question.questionType)
        
        <input type={question.QuestionType} value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      
    </div>
  )
}

export default Answer