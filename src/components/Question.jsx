import React from 'react'
import { useState } from 'react'
import Answer from './Answer';

// const questionType = ['checkbox', 'radio', 'textarea']
// const data = { questiontext: '', QuestionType: '' }

const Question = ({ question, setQuestion, questionType }) => {

    // const [question, setQuestion] = useState(data);
    // console.log(question.QuestionType)

    return (

        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Question</span>
                <input type="text" value={question.Question} onChange={(e) => setQuestion({ ...question, questiontext: e.target.value })} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div>{question.questiontext}</div>

            <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example" onChange={(e) => {
                setQuestion({ ...question, QuestionType: e.target.value })
            }}>
                {questionType.map((type) => (
                    <option key={type} value={type}> {type} </option>
                ))}
            </select>

        </div>
    )
}

export default Question