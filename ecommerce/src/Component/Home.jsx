import React from 'react'
import Product from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
            <img src="https://blog.wideeyes.ai/wp-content/uploads/2022/05/fashion-ecommerce-trends.jpeg" className="card-img" alt="background" height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h5 className="card-title display-3">NEW SEASON ARRIVALS</h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
        <Product/>
    </div>
  )
}

export default Home