export const QuestionContainer = ({ questionObj, questionIdx, checkAnswer }) => {

    return (
        <div className='row mb-3'>
            <div className='col-6 mx-auto question-container'>

            <h2>{questionObj.question}?</h2>

            {
                questionObj.answers.map(answerObj => {
                    return (
                        <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" 
                            name={'question'+questionIdx} 
                            onChange={event => { checkAnswer(questionIdx, answerObj.correct) }}
                            />
                        
                        <label className="form-check-label">
                            {answerObj.answer}
                        </label>
                        
                        </div>
                    )
                })
            }

            </div>
        </div>
    )
}
