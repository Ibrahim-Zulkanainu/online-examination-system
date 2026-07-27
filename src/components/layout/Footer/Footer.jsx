import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <h3>🎓 ExamPortal</h3>

          <p>
            A secure online examination platform for
            universities, colleges and schools.
          </p>

        </div>

        <div>

          <h4>Quick Links</h4>

          <ul>

            <li>Home</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h4>Contact</h4>

          <p><FaEnvelope /> support@examportal.com</p>

          <p><FaPhone /> +233 XX XXX XXXX</p>

          <p><FaMapMarkerAlt /> Accra, Ghana</p>

        </div>

      </div>

      <div className="copyright">

        © 2026 ExamPortal. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;