import React from 'react'
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img src="https://omitrek.com/images/omilogo.png" alt=""  className="logo" height={"50px"}/>
            <h4>Contact</h4>
            <p><strong>Address:</strong>342 Wallinton road Singapore</p>
            <p><strong>Phone:</strong>+212-30242325, 2942342421</p>
            <p><strong>Hours:</strong>10:00-18:00, Mon-Sat</p>
            <div className="follow">
                <h4>Follow us on</h4>
                <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="">About us</a>
            <a href="">Delivery Information</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Contact us</a>
        </div>
        <div className="col">
            <h4>My Accounts</h4>
            <a href="">Sign in</a>
            <a href="">VIew cart</a>
            <a href="">My Wishlist</a>
            <a href="">Track my order</a>
            <a href="">Help</a>
        </div>
        <div className="copyright">
            <p>&copy; 2023, By Gaurav Sharma</p>
        </div>
    </footer>
  )
}

export default Footer