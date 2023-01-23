import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { incrementa } from '../slices/contatore';

// Home | Profile | otherPage

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <button onClick={() => this.props.incrementa()}>Incrementa</button>
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>Last News</li>
                </ul>
            </div>
        )
    }

}

const mapActionToProps = {incrementa};

export default connect(null, mapActionToProps)(Navbar)