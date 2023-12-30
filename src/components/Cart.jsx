import React from "react";
import "../styles/cart.scss"

const Cart = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Let 's_talk</h2>
        <p>LEAVE A MESSAGE, we love to hear you.</p>
      </section>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>REMOVE</td>
              <td>IMAGE</td>
              <td>PRODUCT</td>
              <td>PRICE</td>
              <td>QUANTITY</td>
              <td>SUBTOTAL</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="">
                  <i className="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70" alt="" />
              </td>
              <td>Cartoon Astronot T-shirt</td>
              <td>$112.23</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$112.23</td>
            </tr>
            <tr>
              <td>
                <a href="">
                  <i className="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/z/v/-original-imagpzadfxy8dybp.jpeg?q=70" alt="" />
              </td>
              <td>Aromatic T-shirt</td>
              <td>$112.23</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$112.23</td>
            </tr>
            <tr>
              <td>
                <a href="">
                  <i className="far fa-times-circle"></i>
                </a>
              </td>
              <td>
                <img src="https://rukminim2.flixcart.com/image/612/612/l2z26q80/shopsy-jacket/p/u/q/s-mntnw-4024-montrez-women-original-image7y7ygpsvvzr.jpeg?q=70" alt="" />
              </td>
              <td>Printed flower shirt</td>
              <td>$112.23</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$112.23</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply for coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon Code" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 335</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>$ 335</td>
            </tr>
          </table>
          <button className="normal">Proceed To Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
