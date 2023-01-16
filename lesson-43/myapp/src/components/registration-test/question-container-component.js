export const QuestionContainer = ({ questionObj, checkAnswer }) => {

    return (
        <div className='row'>
            <div className='col-6 mx-auto question-container'>

            <h2>{questionObj.question}?</h2>

            {
                questionObj.answers.map(answerObj => {
                    return (
                        <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="flexRadioDefault1" 
                            onChange={event => checkAnswer(answerObj.correct)}
                            />
                        
                        <label className="form-check-label" for="flexRadioDefault1">
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
