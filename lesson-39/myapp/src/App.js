import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer'
import Navbar from './components/navbar';


function App() {
  
  const themeBlackEnabled = true

  const styles = {
    backgroundColor: themeBlackEnabled ? 'black' : 'white',
    color: themeBlackEnabled ? 'white' : 'black',
  }

  return (
    <div>
      <Navbar menuTitle="foo title"/>

      <div style={ styles }>
        <p>hello world </p>
      </div>

      {/* <div style={[ styles, { backgroundColor: 'green' } ]}> </div> */}

      <p style={{ color: 'black' }}></p>


      <Footer date="2022" text="copyright" />
    </div>
    
  );
}

export default App;
