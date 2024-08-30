import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Form from './components/Form';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
function App() {
  // // For bliging The Title We can Change The Title...
  // setInterval(() => {
  //   document.title = 'Install TextUtiles Now'
  // }, 500);
  // setInterval(() => {
  //   document.title = 'TextUtiles'
  // }, 1100);


  let colorIndex = 0
  let colors = ['red', 'green', 'blue', 'orange', 'aqua', 'orangered', 'yellow', 'white', 'black', 'magenta', 'tomato', 'pink']
  function changeBodyBackground() {
    document.body.style.background = colors[colorIndex]
  }

  setInterval(() => {
    if (colorIndex >= colors.length) {
      colorIndex = 0
      changeBodyBackground()
    } else {
      colorIndex++;
      changeBodyBackground()
    }
    if (document.body.style.background === 'black' || document.body.style.background === 'blue') {
      document.body.style.color = 'white'
    } else {
      document.body.style.color = 'black'
    }
  }, 2000);

  return (
    <>
      <Router>
        <Navbar/>
        <div>
          <Routes>
            {/* react use partial searching if we use just path... it may result in rendering wrong page... so always use "exact" word wiht path .. by doing this react will use exact searching */}
          <Route exact path="/" element={<TextArea/>} />
          <Route exact path="/form" element={<Form/>} />
          <Route exact path="/about" element={<About/>} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
