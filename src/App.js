
import './App.css';
import image from './20494859.jpg'
import {Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
       <h1 className="title red">Your name here</h1>
         <br />
          <img src={image} />
          <br />
           <img src="652a7adb1b_98148_01-intro-773.jpg" />
         </div>
        <video width={320} height={240} controls>
           <source src="myVideo.mp4" type="video/mp4" />
       </video>

      </div>
  )}
export default App;
