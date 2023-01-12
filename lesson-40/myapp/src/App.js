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

      <Footer date="2022" text="copyright" />

    </div>
    
  );
}

export default App;
