import React from "react";
import imageHome from "../img/rwanda.jpg";
import Navbar from "./navbar";
import Footer from "./footer";

const HomePage = () => {
  return (
    <body>
      <Navbar />
      <main class="page landing-page">
        <section
          class="clean-block clean-hero"
          style={{
            backgroundImage: `url(${imageHome})`,
            color: (9, 162, 255, 0.85),
            marginTop: -21,
          }}
        >
          <div class="text">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
            <button class="btn btn-outline-light btn-lg" type="button">
              Learn More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default HomePage;
