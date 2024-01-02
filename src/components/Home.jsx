import React from "react";
import "../styles/Home.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home1">
          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>grosary</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>Mobile</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>mobile</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>fashion</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>electronic</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>grosary</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>grosary</p>
            </div>
          </div>

          <div class="image-row">
            <img
              src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
              alt="Description of the image"
            />
            <div class="text">
              <p>grosary</p>
            </div>
          </div>
        </div>

        <div className="carousel-container">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // Change this value for the autoplay interval
            stopOnHover={true}
          >
            <div className="carousel-item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa4dfef111a944ea.jpg?q=20"
                alt="Item 1"
              />
              <div className="carousel-text"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20"
                alt="Item 1"
              />
              <div className="carousel-text"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d96318f16c153aa.jpeg?q=20"
                alt="Item 1"
              />
              <div className="carousel-text"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a05f4b3d67f2b16c.jpg?q=20"
                alt="Item 1"
              />
              <div className="carousel-text"></div>
            </div>
          </Carousel>
        </div>

        <div className="head">
          <h3>Best Sold Products</h3>
        </div>
        <div className="last">
          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/kzblocw0/kitchen-press/t/u/4/premium-quality-stainless-steel-sev-sancha-machine-muruku-maker-original-imagbcyafht9gafe.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/x/i/l/-original-imagmf93fpteqqe5.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/l2jcccw0/memory-card/sdxc-uhs-i-card/6/b/c/sdsqua4-256g-gn6mn-sandisk-original-imagdv34rzuhp9f2.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/x/i/l/-original-imagmf93fpteqqe5.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/x/i/l/-original-imagmf93fpteqqe5.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/x/i/l/-original-imagmf93fpteqqe5.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/x/i/h/-original-imaghttrvjbexvux.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>
        </div>


                                                                {/* page3 start */}

                                                                
        <div className="homeMain">
          <div class="container">
          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/x/i/h/-original-imaghttrvjbexvux.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/duffel-bag/u/j/h/-original-imagvypqqyzygcyf.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/v/r/w/for-wellness-non-slip-super-soft-for-men-and-women-with-cover-6-original-imagv8h3wgezyezx.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/klphn680/coffee/e/p/9/200-xtra-instant-coffee-pouch-continental-coffee-original-imagyrtqhmnt3gkg.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          </div>
          <div class="container">
          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/kiow6fk0-0/jacket/m/i/a/m-jkt-mw-pwti-original-imafyf7cg86qkxmj.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/jbqtqq80/balaclava/x/q/w/free-thermal-fleece-outdoor-face-mask-grey-futaba-original-imafyyw8kpbxas7k.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/u/l/3-ld741-3-layasa-pink-original-imag9782ngreknmk-bb.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/l/y/h/xxl-mango-long-spoque-original-imaghdgnymtgwsyp.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>
          
          </div>

          <div class="container">
          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/h/k/g/zeb-bro-zebronics-original-imagg6nbuyurdcvh.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkevktvq4w.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/printer/9/b/n/-original-imagnuwebynkb2rc.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>

          <div className="product-box">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/e/l/-original-imagvqbngbvhqcjs.jpeg?q=70"
              alt="toy"
              className="product-image"
            />
            <div className="product-name">toy gun</div>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

