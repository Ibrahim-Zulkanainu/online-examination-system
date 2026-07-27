import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <h1>
            Online Examination Portal
          </h1>

          <p>
            A secure and intelligent platform for conducting
            online examinations, managing question banks,
            and generating results instantly.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Get Started
            </button>

            <button className="btn-outline">
              Watch Demo
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;