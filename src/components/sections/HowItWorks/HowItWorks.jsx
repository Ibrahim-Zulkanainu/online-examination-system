import "./HowItWorks.css";
import {
  FaUserPlus,
  FaSignInAlt,
  FaLaptop,
  FaCheckCircle,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Register",
      description: "Create your student account."
    },
    {
      icon: <FaSignInAlt />,
      title: "Login",
      description: "Access your dashboard securely."
    },
    {
      icon: <FaLaptop />,
      title: "Take Exam",
      description: "Complete your examination online."
    },
    {
      icon: <FaCheckCircle />,
      title: "View Results",
      description: "See your results immediately after submission."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{index + 1}</div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;