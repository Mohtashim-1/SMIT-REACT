import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer1">
        <form action="#">
          <label htmlFor="Email">Email:</label><br />
          <input type="email" placeholder='Enter Email' />
          <br />
          <label htmlFor="password">Password</label><br />
          <input type="password" placeholder='Enter Password' /><br />
          <button>Submit</button>
        </form>
      </div>
      <div className="footer2">
        <h1>Our  Goals</h1>
        <p className='footer2Para'>
        Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan. 
        </p>
      </div>
      <div className="footer3">
        <h1 className='map-h1'>Location</h1>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.741452656319!2d67.0899358!3d24.9257545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2befaba123014ab1!2sSaylani%20Mass%20IT%20Training%20(SMIT)!5e0!3m2!1sen!2s!4v1673122042565!5m2!1sen!2s" loading="lazy" ></iframe>
      </div>
    </div>
  )
}

export default Footer