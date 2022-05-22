import React from 'react';
import bg from '../images/bg.jpg'
const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
  <img src={bg} class="card-img" alt="Background" height="550px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
  <div className='container'>
    <h5 class="card-title display-3 fw-bolder mb-0">Card title</h5>
    <p class="card-text lead fs-2">This is a wider card with supporting <br /> text below as a natural lead-in to additional content..</p>
    <p class="card-text">Last updated 3 mins ago</p>
    <button type="button" class="btn btn-success">Success</button>
  </div>
  </div>
</div>
            
        </div>
    );
};

export default Home;