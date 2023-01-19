import React, { Component } from "react";

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testoNuovaAttivita: '',
            attivita: []
        }
    }

    componentDidMount() {
        const precedentiAttivita = window.localStorage.getItem('attivita'); // o una richiesta http al server se abbiamo bisogno di informazioni dal server
        this.setState({
            attivita: precedentiAttivita === null ? [] : JSON.parse(precedentiAttivita)
        });
    }

    salvaAttivita = () => {
       window.localStorage.setItem('attivita', JSON.stringify(this.state.attivita)); // o una richiesta al server per salvare le attivita
    }

    aggiungiAttivita = () => {
        this.setState({
            attivita: [...this.state.attivita, this.state.testoNuovaAttivita]
        }, () => {
            this.salvaAttivita();
        });
    }

    eliminaAttivita = (index) => {
        this.setState({
            attivita: this.state.attivita.filter((ele, internalIdx) => internalIdx !== index)
        }, () => {
            this.salvaAttivita();
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.attivita.map((ele, index) => (
                        <li>{ele} <span onClick={evt => this.eliminaAttivita(index)}>x</span></li>
                    ))}
                </ul>
                <input type="text" onInput={evt => this.setState({ testoNuovaAttivita: evt.target.value })} placeholder="Inserisci qualcosa da fare..." />
                <button onClick={this.aggiungiAttivita} type="button">Aggiungi</button>
            </div>
        )
    }
}

export default TodoComponent;