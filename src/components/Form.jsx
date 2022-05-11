// import React, { useState } from 'react'

// const Form = () => {
   

//     const [answer, setAnswer] = useState([]);


//     const submitQuestion = () => {

//     }

//     return (
//         <div className="container">
//             <form onClick={submitQuestion} >
               
//                 {question.Question}
//                 <select class="form-select form-select-sm" aria-label=".form-select-sm example"  >
//                     {answerType.map((questiontype)=> (
//                         <option value={questiontype}  onchange={(e)=>setQuestion({...question, answerType:e.target.value})}>{questiontype}</option>
                        
//                     ))}
//                     { question.AnswerType}
                
//                 </select>
//                 <div className="input-group mb-3">
//                     <span className="input-group-text"  >Answer</span>
//                     <input type={question.AnswerType} value={question.Answer} onchange ={(e)=>setQuestion({...question, Answer:e.target.value})} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//                     {question.Answer}
//                 </div>

// //             </form>
// //         </div>
//     )
// }

// export default Form