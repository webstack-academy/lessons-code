import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { incrementa } from '../slices/contatore';

// Home | Profile | otherPage

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <p>
                Numero globale: {this.props.contatore}
            </p>
        )
    }

}

const mapStateToProps = (state) => ({
    contatore: state.contatore.value
});


export default connect(mapStateToProps, null)(Footer)