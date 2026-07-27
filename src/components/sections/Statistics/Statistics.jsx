import "./Statistics.css";
import {
  FaUserGraduate,
  FaClipboardList,
  FaBook,
  FaAward,
} from "react-icons/fa";

function Statistics() {
  const statistics = [
    {
      icon: <FaUserGraduate />,
      number: "5,000+",
      label: "Students",
    },
    {
      icon: <FaClipboardList />,
      number: "350+",
      label: "Examinations",
    },
    {
      icon: <FaBook />,
      number: "12,000+",
      label: "Questions",
    },
    {
      icon: <FaAward />,
      number: "99%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="statistics">
      <div className="container">

        <h2 className="section-title">
          Platform Statistics
        </h2>

        <div className="statistics-grid">

          {statistics.map((item, index) => (

            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;