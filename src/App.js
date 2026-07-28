import "./App.css";
import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./components/layouts/PublicLayout";
import AuthLayout from "./components/layouts/AuthLayout";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

// Authentication Pages
import Register from "./pages/public/Register";
import StudentLogin from "./pages/public/StudentLogin";
import AdminLogin from "./pages/public/AdminLogin";

function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />

      {/* Authentication Pages */}
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />

      <Route
        path="/student-login"
        element={
          <AuthLayout>
            <StudentLogin />
          </AuthLayout>
        }
      />

      <Route
        path="/admin-login"
        element={
          <AuthLayout>
            <AdminLogin />
          </AuthLayout>
        }
      />

    </Routes>
  );
}

export default App;