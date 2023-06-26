import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import Footer from './Footer';
import Header from './Header';

export const Mycontext = createContext();

function App() {

  const handleContext = () => {
    console.log('Handle context Update');
  }
  
  return (
    <div className="App">
      <Mycontext.Provider value={handleContext}>
        <Header/>
        <Footer/>    
      </Mycontext.Provider>
    </div>
  );
}

export default App;
