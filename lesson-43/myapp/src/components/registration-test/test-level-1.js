import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionContainer } from './question-container-component'
import Button from 'react-bootstrap/Button';

const quizQuestions = [
    {
        question: "Cosa e' html?",
        answers: [
            {
                answer: 'Linguaggio di programmazione',
                correct: false 
            },
            {
                answer: 'Linguaggio di markup',
                correct: true 
            },
            {
                answer: 'Roba nel browser',
                correct: false
            }
        ] 
    },
    {
        question: "Cosa e' il css?",
        answers: [
            {
                answer: 'Linguaggio di programmazione',
                correct: false 
            },
            {
                answer: 'Linguaggio di stili',
                correct: true 
            },
            {
                answer: 'Roba nel browser',
                correct: false
            }
        ] 
    },
    {
        question: "Cosa e' JS?",
        answers: [
            {
                answer: 'Linguaggio di programmazione',
                correct: true 
            },
            {
                answer: 'Linguaggio di markup',
                correct: false 
            },
            {
                answer: 'Coseee',
                correct: false
            }
        ] 
    },
    {
        question: "JS e' un linguaggio?",
        answers: [
            {
                answer: 'front-end',
                correct: false 
            },
            {
                answer: 'back-end',
                correct: false 
            },
            {
                answer: 'full-stack',
                correct: true
            }
        ] 
    }
]

class TestLevel1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            points: 0
        }
    }

    checkAnswer = (correct) => {
        if (correct) {
            this.setState({ points: this.state.points + 1 })
        } else if (this.state.points > 0 && !correct) {
            this.setState({ points: this.state.points - 1 })
        }
    }

    checkAllAnswers = () => {
        if (this.state.points >= 3) {
            console.log('promoted')
        } else {
            console.log('try again')
        }
    }


    render() {
        return (
            <div>
                {quizQuestions.map(question => {
                    return (
                        <QuestionContainer questionObj={question} checkAnswer={this.checkAnswer.bind(this)} />
                    )
                })}
         <Button variant="success" onClick={this.checkAllAnswers} className="mx-auto mt-5">Check my answers</Button>
        </div>
        )
    }

}

export default TestLevel1