import logo from './logo.svg';
import Helphenlogo from './img/helphenlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='banner'>
        <div className='header'>
            <img src={Helphenlogo} className="logo" height={100}></img>
            <a href=''>Contract Us</a>
        </div>
        <div>
          <p>Happay Random Acts of Kindness Day!</p>
        </div>
        <div className='Complement'>
          <p>Here's a compliment to brighten up your day:</p>
          <div className='quote'></div>
        </div>
        <hr />
        <div className='footer'>
          <div className='helphen'>
            <p>Developed with &hearts; by Helphen India</p>
          </div>
          <div className=''>

          </div>
        </div>
     </div>
    </div>
  );
}
export default App;
