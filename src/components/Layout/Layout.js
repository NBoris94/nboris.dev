import Header from "./Header"
import Footer from "./Footer"
import Request from "../Request/Request"

const Layout = ({ children }) => {
  return (
    <div className="body__group">
      <Header />

      <main>
        {children}

        <Request />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
