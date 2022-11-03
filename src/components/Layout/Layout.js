import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="body__group">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
