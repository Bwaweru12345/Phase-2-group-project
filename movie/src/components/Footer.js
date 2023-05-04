import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Reach out to us for any questions. </h1>
              <p>hwaweru700@gmail.com</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      
      <div className='legal'>
        <span>2023 ©  Designd By Group 4.</span>
      </div>
    </div>
  );
}

export default Footer