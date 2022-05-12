import React, { useState } from 'react'
import Answer from './Answer'
import Question from './Question'


const questionType = ['checkbox', 'radio', 'textarea']
const data = { questiontext: '', QuestionType: '' }


const Form = () => {
    const [question, setQuestion] = useState(data);
  return (
    <div>
        <Question question={question} setQuestion={setQuestion} questionType={questionType} />
        <Answer question={question} setQuestion={setQuestion} />
    </div>
  )
}

export default Form