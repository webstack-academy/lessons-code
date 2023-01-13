import React, { Component } from "react";

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenutiTabella: [],
            nome: '',
            eta: '18',
            citta: '',
            numeroRandom: '',
        }
    }

    componentDidMount() {
        this.intervallo = setInterval(
            () => {
                const numeroCasuale = Math.random();
                this.setState({
                    numeroRandom: numeroCasuale
                });
                console.log(numeroCasuale);
            }, 5000
        );
        // QUI richieste AJAX iniziali
    }

    componentWillUnmount() {
        clearInterval(this.intervallo);
    }

    aggiungiContenutoTabella = () => {
        const elemento = {
            nome: this.state.nome,
            eta: this.state.eta,
            citta: this.state.citta
        };
        this.setState({
            contenutiTabella: [...this.state.contenutiTabella, elemento]
        });
    }

    render() {
        return (
            <div>
                {this.state.numeroRandom}
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Età</th>
                        <th>Città</th>
                    </tr>
                    {this.state.contenutiTabella.map(contenutoTabella => (
                        <tr>
                            <td>{contenutoTabella.nome}</td>
                            <td>{contenutoTabella.eta}</td>
                            <td>{contenutoTabella.citta}</td>
                        </tr>
                    ))}
                </table>
                <label>Nome: <input value={this.state.nome} onInput={evt => this.setState({ nome: evt.target.value })} type="text" placeholder="Nome" /></label>
                <label>Età: <input value={this.state.eta} onInput={evt => this.setState({ eta: evt.target.value })} type="number" placeholder="Età" /></label>
                <label>Città: <input value={this.state.citta} onInput={evt => this.setState({ citta: evt.target.value })} type="text" placeholder="Città" /></label>
                <button onClick={this.aggiungiContenutoTabella}>Aggiungi</button>
            </div>
        );
    }
}

export default ProfileComponent;