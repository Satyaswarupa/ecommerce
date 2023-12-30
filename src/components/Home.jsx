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
      <div className="home2">
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/l2jcccw0/memory-card/sdxc-uhs-i-card/6/b/c/sdsqua4-256g-gn6mn-sandisk-original-imagdv34rzuhp9f2.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/x/i/l/-original-imagmf93fpteqqe5.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/kit/k/p/k/3-in-1-convertible-dumbbells-barbell-home-gym-set-kit-for-home-original-imagpj2dragnmmwv.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/x/u/e/sony-apsc-ilce-6100y-b-in5-mirrorless-original-imafm6msr4fghzfw.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
        <div className="homeimg">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/l4ssfww0/shaver/p/r/f/538-professional-hair-cutting-machine-professional-rechargeable-original-imagfhm7ggecfxjx.jpeg?q=70"
            alt=""
            height={"auto"}
            width={"100px"}
          />
          <p>pendrive and sd card</p>
        </div>
      </div>

    <div className="homeMain">
    <div class="container">
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/612/612/kzblocw0/kitchen-press/t/u/4/premium-quality-stainless-steel-sev-sancha-machine-muruku-maker-original-imagbcyafht9gafe.jpeg?q=70" alt="Product 1" />
            <p>Product 1</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 2" />
            <p>Product 2</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 3" />
            <p>Product 3</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 4" />
            <p>Product 4</p>
        </div>
    </div>

    <div class="container">
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 1" />
            <p>Product 1</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70" alt="Product 2" />
            <p>Product 2</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 3" />
            <p>Product 3</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 4" />
            <p>Product 4</p>
        </div>
    </div>

    <div class="container">
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/h/m-kcsh-heavy-check-ru-fubar-original-imagtvevvmqhqrfh.jpeg?q=70" alt="Product 1" />
            <p>Product 1</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 2" />
            <p>Product 2</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 3" />
            <p>Product 3</p>
        </div>
        <div class="box">
            <img src="https://rukminim2.flixcart.com/image/312/312/kmxsakw0/computer/f/g/t/na-laptop-msi-original-imagfq9cthg4wxwh.jpeg?q=70" alt="Product 4" />
            <p>Product 4</p>
        </div>
    </div>

    </div>
 
    </div>
   </>
  );
};

export default Home;
