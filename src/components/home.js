import React from 'react'
import Footer from '../layouts/footer';
import uno from '../img/home/uno.png';


const Home = () => {
  return (
    <div>
      <div style={{ position: 'relative'}}>
      <img className='img-fluid' src={uno} alt="avión" d-block w-100></img>
      <div className='resposive' style={{ position: 'absolute', top: '100px', left: '90px', color: 'white',fontFamily:'Montserrat', fontSize: '1.2rem' }}>
        <div className='fluid'>
        <h1 >Welcome to Optimen</h1>
        <p>Unique team of Resources Management and Optimization Experts and <br></br>
          passionate Software Developers.</p>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
