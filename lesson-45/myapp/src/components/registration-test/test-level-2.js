import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionContainer } from './question-container-component'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const quizQuestions = [
    {
        question: "Cos'e' lo stack?",
        answers: [
            {
                answer: "E' un panino",
                correct: false 
            },
            {
                answer: "E' un area di memoria per le varibili globali",
                correct: false 
            },
            {
                answer: "E' un area di memoria per le variabili allocate per le chiamate a funzioni",
                correct: true
            }
        ] 
    }
]

class TestLevel2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            points: 0,
            questions: [],
            showFailedModal: false,
            showSuccessModal: false
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
            this.setState({ showSuccessModal: true })
        } else {
            console.log('try again');
            this.setState({ showFailedModal: true })
        }
    }


    render() {
        const handleClose = () => this.setState({ showFailedModal: false })
        const handleSuccessClose = () => {
            
        }

        return (
            <div>
                {quizQuestions.map((question, index) => {
                    return (
                        <QuestionContainer questionObj={question} questionIdx={index} checkAnswer={this.checkAnswer.bind(this)} />
                    )
                })}
                <Button variant="success" onClick={this.checkAllAnswers} className="d-block mx-auto mt-5">Check my answers</Button>


            <Modal show={this.state.showFailedModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sei na capra</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>Devi da riprova!</Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={this.state.showSuccessModal} onHide={handleSuccessClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sei mejo te</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>Sei stato bravissimo vai con il successivo</Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSuccessClose}>
                        daje
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }

}

export default TestLevel2