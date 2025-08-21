import Footer from "../components/footer/Footer";
import Header from "../components/Header";
const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;