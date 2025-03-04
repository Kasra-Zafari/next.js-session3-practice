import Link from "next/link";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-black text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Home Layout</h1>
          <nav className="nav">
            <Link className="nav-link text-white" href="/">Home</Link>
            <Link className="nav-link text-white" href="/about">About</Link>
            <Link className="nav-link text-white" href="/about/company">Company</Link>
            <Link className="nav-link text-white" href="/products">Products</Link>
          </nav>
        </div>
      </header>
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
