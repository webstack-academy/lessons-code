import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export const HomeComponent = () => {

    return (
        <div>
            <h1>Welcome to the webstack academy registration test</h1>
            <Link to="/test-level-1">
                <Button variant="warning">Start</Button>
              </Link>
        </div>
    )
}