import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementa } from "../slices/contatore";

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroInput: '',
            listaNumeri: []
        }
    }

    aggiungiNumero = () => {
        this.setState({
            listaNumeri: [...this.state.listaNumeri, this.state.numeroInput]
        });
    }

    render() {
        return (
            <div>
                <input onInput={evt => this.setState({ numeroInput: evt.target.value })} type="number" />
                <button onClick={this.aggiungiNumero}>Invia</button>
                <p>
                    Numeri inseriti: {this.state.listaNumeri.map(numero => (
                        <span>{numero * this.props.contatore} - </span>
                    ))}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contatore: state.contatore.value
});

const mapActionToProps = { incrementa };

export default connect(mapStateToProps, mapActionToProps)(ProfileComponent);