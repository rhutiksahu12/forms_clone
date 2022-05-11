import React from 'react'
import { useState } from 'react'


const data = { question: '', QuestionType: ['checkbox', 'radio', 'textarea'] }

const Question = () => {

    const [question, setQuestion] = useState(data);
    console.log(question.QuestionType)

    return (

        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Question</span>
                <input type="text" value={question.Question} onChange={(e) => setQuestion({ ...question, Question: e.target.value })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div>{question.Question}</div>
            {
                question ? console.log(question.QuestionType) : console.log('no question')
            }
            <select className="form-select form-select-sm" aria-label=".form-select-sm example"  >
                {question.QuestionType.map((questiontype) => (
                    <option value={question.QuestionType} onchange={(e) => setQuestion({ ...question, QuestionType: e.target.value })}>{questiontype}</option>


                ))}
            </select>

        </div>
    )
}

export default Question