import "./Features.css";
import { FaBookOpen, FaChartBar, FaLock, FaBolt } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Question Bank",
      description:
        "Create, edit and organize thousands of examination questions."
    },
    {
      icon: <FaBolt />,
      title: "Instant Results",
      description:
        "Automatically calculate and publish examination results."
    },
    {
      icon: <FaLock />,
      title: "Secure Authentication",
      description:
        "Students and administrators are protected with secure login."
    },
    {
      icon: <FaChartBar />,
      title: "Performance Reports",
      description:
        "Generate reports and monitor student performance."
    }
  ];

  return (
    <section className="features">
      <div className="container">

        <h2 className="section-title">
          Why Choose ExamPortal?
        </h2>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;