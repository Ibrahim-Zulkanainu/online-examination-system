import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;