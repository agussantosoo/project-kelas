import React from "react";
import Layout from "../Layout";

//import image
import main from "../images/main.png";
import delivery from "../images/delivery.jpeg";
import cooking from "../images/cooking.webp";
import healthy from "../images/healthyfood.jpeg";
import menu1 from "../images/menu_1.png";
import menu2 from "../images/menu_2.webp";
import menu3 from "../images/menu_3.webp";

export default function Home() {
  return (
    <Layout>
      <section className="mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1>Best Food For You</h1>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br />
                Cumque corporis repellendus asperiores necessitatibus ipsa sit a
                adipisci?
                <br />
                Quo, pariatur suscipit. Deserunt alias autem temporibus
                inventore, exercitationem veritatis. Quae, molestiae
                praesentium.
              </p>
              <div className="mt-3">
                <button className="btn btn-success rounded-4">Order Now</button>
                <button className="btn btn-secondary rounded-4">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-sm-6 d-none d-sm-flex">
              <img src={main} alt="Menu 1" className="" />
            </div>
          </div>

          <div className="row justify-content-center my-5">
            <div className="w-auto">
              <div className="border-bottom border-2 border-success text-center">
                <h2>Extraordinary Teste and Experience</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
            <div className="col-sm-6">
              <h3>We Make Sure Your Food Arrice On Time</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                maiores nesciunt porro reiciendis nam voluptatem soluta esse
                dicta alias illum adipisci amet similique dignissimos, vero,
                quos maxime, laborum hic ad!
              </p>
              <div className="mt-3">
                <button className="btn btn-success rounded-4">Read More</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="ps-sm-5">
                <img
                  src={delivery}
                  alt="delivery"
                  className="w-100 rounded-4"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-sm-center my-5">
            <div className="col-sm-6">
              <div className="pe-sm-5">
                <img src={cooking} alt="cooking" className="w-100 rounded-4" />
              </div>
            </div>
            <div className="col-sm-6">
              <h3>High Quality Food Material</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                maiores nesciunt porro reiciendis nam voluptatem soluta esse
                dicta alias illum adipisci amet similique dignissimos, vero,
                quos maxime, laborum hic ad!
              </p>
              <div className="mt-3">
                <button className="btn btn-success rounded-4">Read More</button>
              </div>
            </div>
          </div>
          <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
            <div className="col-sm-6">
              <h3>Customize Your Own Bowl</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                maiores nesciunt porro reiciendis nam voluptatem soluta esse
                dicta alias illum adipisci amet similique dignissimos, vero,
                quos maxime, laborum hic ad!
              </p>
              <div className="mt-3">
                <button className="btn btn-success rounded-4">Read More</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="ps-sm-5">
                <img
                  src={healthy}
                  alt="healthy food"
                  className="w-100 rounded-4"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-5">
            <div className="w-auto">
              <div className="border-bottom border-2 border-success text-center">
                <h2>Our Signature Menu</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center flex-sm-row flex-column">
            <div className="col-sm-3 d-flex flex-column align-items-center">
              <div className="rounded-4 bg-success d-flex justify-content-center align-items-center py-5">
                <img src={menu1} alt="menu 1" className="w-75" />
              </div>
              <h5 className="mt-2">Salmon Salad with Mix Veggies</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                quos itaque est eum officia soluta pariatur minima earum, quasi
                ullam quas nisi commodi
              </p>
            </div>
            <div className="col-sm-3 d-flex flex-column align-items-center">
              <div className="rounded-4 bg-success d-flex justify-content-center align-items-center py-5">
                <img src={menu2} alt="menu 2" className="w-75" />
              </div>
              <h5 className="mt-2">Fried Salmon with Brocolli</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                quos itaque est eum officia soluta pariatur minima earum, quasi
                ullam quas nisi commodi
              </p>
            </div>
            <div className="col-sm-3 d-flex flex-column align-items-center">
              <div className="rounded-4 bg-success d-flex justify-content-center align-items-center py-5">
                <img src={menu3} alt="menu 3" className="w-75" />
              </div>
              <h5 className="mt-2">Salmon with BBQ Sauce</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                quos itaque est eum officia soluta pariatur minima earum, quasi
                ullam quas nisi commodi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="row div-subs rounded-4 py-3 px-sm-5 align-items-center flex-column flex-sm-row">
            <div className="col-sm-6 text-white align-items-center mb-2">
              <h5>Subscribe to our promo</h5>
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className="col-sm-6 align-items-center">
              <div className="input-group align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="input your email"
                  aria-label="recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Discover Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
