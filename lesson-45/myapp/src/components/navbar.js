import React from 'react'
import { Link } from 'react-router-dom'

// Home | Profile | otherPage

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
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
        )
    }

}

export default Navbar