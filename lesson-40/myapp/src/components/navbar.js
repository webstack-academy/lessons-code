import React from 'react'

class BaseNavbar extends React.Component {
    methodX() {}
}

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        /*this.state = {
            numeroCasuale: 5,
            contaClick: 0 
        };*/

        this.state = {
            numeriCasuali: []
        };
    }

    /*
    cambiaValore = () => {
        this.setState({
            numeroCasuale: Math.random()
        });     
    }

    aggiungiClick = () => {
        this.setState({
            contaClick: this.state.contaClick + 1
        });
    }    
    */

    aggiungiNumeroCasuale = () => {
        const nuovoNumero = Math.random();
        this.setState({
            numeriCasuali: [...this.state.numeriCasuali, nuovoNumero]
        });
    }

    rimuoviNumeroCasuale = (index) => {
        this.setState({
            numeriCasuali: this.state.numeriCasuali.filter((value, i) => i !== index)
        });
    }

    render() {
        return (
            <div>
                { /*
                <div>
                menu title <p>{this.props.menuTitle}</p>
                <p>Numero casuale: { this.state.numeroCasuale }</p>
                <button onClick={this.cambiaValore}>Clicca per cambiare il valore di uno stato</button>
           
                <p>Numero click sul bottone: { this.state.contaClick }</p>
                <button onClick={this.aggiungiClick}>Clicca per cambiare il valore di uno stato</button>
                </div>
                */ }
                Lista numeri casuali:
                {this.state.numeriCasuali.map((numeroCasuale, index) => (
                    <p>Numero {numeroCasuale} <button onClick={() => this.rimuoviNumeroCasuale(index)}>x</button></p> 
                ))} 
                <br/>   
                <button onClick={this.aggiungiNumeroCasuale}>Aggiungi numero casuale</button>
           </div>
        )
    }
}

class NavbarPremiumUsers extends BaseNavbar {
    render() {
        this.methodX()

        return (
            <div>
                <p>im a fuckin navbar</p>
            </div>
        )
    }

}

export default Navbar