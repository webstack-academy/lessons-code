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
            points: 0,
            questions: []
        }
    }

    checkAnswer = (questionIdx, correct) => {
        console.log('Risposta corretta:' + correct);
        if (this.state.questions.some((ele) => ele.questionIdx === questionIdx)) {
            this.setState({
                questions: this.state.questions.map((question) => {
                    if (question.questionIdx === questionIdx) {
                        question.correct = correct;
                    }
                    return question;
                })
            });
        } else {
            this.setState({
                questions: [...this.state.questions, {questionIdx, correct}]
            });
        }
    }

    checkAllAnswers = () => {
        const sommaPunti = this.state.questions.reduce((acc, ele) => {
            const valoreRisposta = ele.correct ? 1 : 0;
            return acc + valoreRisposta;
        }, 0);
        console.log(sommaPunti);
       if (sommaPunti >= 3) {
            console.log('promoted');
        } else {
            console.log('try again');
        }
    }


    render() {
        return (
            <div>
                {quizQuestions.map((question, index) => {
                    return (
                        <QuestionContainer questionObj={question} questionIdx={index} checkAnswer={this.checkAnswer.bind(this)} />
                    )
                })}
                <Button variant="success" onClick={this.checkAllAnswers} className="d-block mx-auto mt-5">Check my answers</Button>
            </div>
        )
    }

}

export default TestLevel1