import React from 'react'

class BaseNavbar extends React.Component {
    methodX() {}
}

class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }
 
    render() {
        return (
            <div>
                menu title <p>{this.props.menuTitle}</p>
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