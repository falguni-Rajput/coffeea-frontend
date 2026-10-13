import Header from "../Components/Header/Header";
import Footer from "../Components/Header/Footer/Footer";
import "./About.css";
import { FaCoffee, FaLeaf, FaHeart, FaTruck } from "react-icons/fa";


function About() {
  return (
    <div className="about-conatiner">
      <Header></Header>

      <div className="about-page">
  
        <section className="about-hero">
          <h1>About Coffeea</h1>
          <p>
            Every cup tells a story. We believe coffee is more than a drink—
            it's a moment of comfort, connection, and happiness.
          </p>
        </section>

        <section className="our-story">
          <div className="story-text">
            <h2>Our Story</h2>

            <p>
              Coffeea was created with one simple idea—to serve freshly brewed
              coffee made from carefully selected beans. From rich espresso to
              creamy lattes and refreshing cold coffees, every cup is prepared
              with passion and attention to detail.
            </p>

            <p>
              Whether you're starting your morning, taking a break, or catching
              up with friends, Coffeea is here to make every moment special.
            </p>
          </div>

          <div className="story-image">
            <img src="/images/about.jpg" alt="Coffee" />
          </div>
        </section>

        <section className="why-us">
          <h2>Why Choose Us?</h2>

          <div className="features">

            <div className="feature-card">
              <FaCoffee />
              <h3>Premium Coffee</h3>
              <p>
                Carefully selected coffee beans for a rich and authentic taste.
              </p>
            </div>

            <div className="feature-card">
              <FaLeaf />
              <h3>Fresh Ingredients</h3>
              <p>
                We use fresh milk, natural flavors, and quality ingredients.
              </p>
            </div>

            <div className="feature-card">
              <FaHeart />
              <h3>Made with Love</h3>
              <p>
                Every cup is handcrafted with care to deliver the perfect
                experience.
              </p>
            </div>

            <div className="feature-card">
              <FaTruck />
              <h3>Fast Delivery</h3>
              <p>
                Hot coffee delivered quickly to your doorstep.
              </p>
            </div>

          </div>
        </section>

        <section className="about-bottom">
          <h2>Our Mission</h2>

          <p>
            Our mission is to bring people together over great coffee while
            providing exceptional quality, warm service, and memorable
            experiences every single day.
          </p>
        </section>

      </div>
      <Footer></Footer>
  
    </div>
    
  );
}

export default About;
