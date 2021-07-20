import logo from './logo.svg';
import './App.css';
import QrContainer from './QrContainer';

function App() {
  return (
    <div className="App">
      <p>Read QR code using webRTC and JsQR library</p>
      <p><b>Please align QR with the scanner</b></p>
      <QrContainer />
    </div>
  );
}

export default App;
