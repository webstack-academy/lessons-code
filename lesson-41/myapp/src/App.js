import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer'
import Navbar from './components/navbar';
import { ProfileComponent } from './components/profile'
import { HomeComponent } from './components/home'
import { NotExistsComponent } from './components/404'
import { ContactsComponent } from './components/contacts'
//ourwebsite.com/profile

function App() {
  
  const themeBlackEnabled = true

  const styles = {
    backgroundColor: themeBlackEnabled ? 'black' : 'white',
    color: themeBlackEnabled ? 'white' : 'black',
  }

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="profile" element={<ProfileComponent />} />
          <Route path="contacts" element={<ContactsComponent />} />
          <Route path="*" element={<NotExistsComponent />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
