import React, { Component } from "react";

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            testoNuovaAttivita: '',
            attivita: [],
            change: false,
            valueToChange: null,
            indexToChange: null
        }
    }

    componentDidMount() {
        /*
            Se salviamo le informazioni nel backend,
            qui dovremmo fare una richiesta per ottenerle
            GET /todos
        */
        setTimeout(() => {
            const precedentiAttivita = window.localStorage.getItem('attivita'); // o una richiesta http al server se abbiamo bisogno di informazioni dal server
            this.setState({
                loading: false,
                attivita: precedentiAttivita === null ? [] : JSON.parse(precedentiAttivita)
            });
        }, 3000);
    }

    salvaAttivita = () => {
        /*
         Se utilizzassimo il backend, ogni nuova attività sarebbe inviata al backend
        */
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

    mostraModificaInpute = (ele, index) => {
        this.setState({
            valueToChange: ele,
            indexToChange: index,
            change: true
        })
    }

    applicaModifiche = () => {
        this.setState({
            attivita: this.state.attivita.map((value, index) => {
                if (this.state.indexToChange === index) {
                    return this.state.valueToChange
                }

                return value
            }),
            change: false
        })
    }


    render() {
        return (
            <div>
                {this.state.loading &&
                    <h1>Sto caricando i contenuti...</h1>
                }
                {!this.state.loading &&
                    <div>
                        <ul>
                            {this.state.attivita.map((ele, index) => (
                                <li>
                                    {ele} 
                                    <span onClick={evt => this.eliminaAttivita(index)}>x</span> {'  '}
                                    <button onClick={() => this.mostraModificaInpute(ele, index)} type="button">modifica</button>
                                </li>
                            ))}
                        </ul>

                        
                        { this.state.change ? 
                    <div>
                        <input type="text" 
                        onInput={evt => this.setState({ valueToChange: evt.target.value })} 
                        value={this.state.valueToChange} 
                        placeholder="Inserisci qualcosa da modificare..." 
                        />
                        
                        <button onClick={this.applicaModifiche} type="button">Applica modifica</button>
                        <button onClick={() => this.setState({ 
                            change: false
                            })} type="button">Annulla</button>
                    </div>    
                    :
                    <div>
                        <input type="text" 
                        onInput={event => this.setState({ testoNuovaAttivita: event.target.value })} 
                        placeholder="Inserisci qualcosa da fare..." 
                        value=""/>
                        <button onClick={this.aggiungiAttivita} type="button">Aggiungi</button>
                    </div>
                    }
                    </div>
                }
            </div>
        )
    }
}

export default TodoComponent;