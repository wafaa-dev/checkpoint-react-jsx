
import React, {img, video } from 'react';
import icon from './images/imageInSrc.jpg'; 

import './App.css';
import './css/style.css'

 

function App() {

    return (
      <div className="division">
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red"> wafaa sakouhi</h1>
          <br />
            <h3 className="title2"> the fall lover </h3>
           <br /> 
        <img className="img1" src={icon} width= '350px' alt= 'image1'/>
          <br />
          <img className="img2"src="/imageInPublic.jpg"  width='500px' alt= 'image2' /> 
        </div>
        <video className="vid" width={500} height={380} controls>
          <source src="autumn.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }


export default App;

