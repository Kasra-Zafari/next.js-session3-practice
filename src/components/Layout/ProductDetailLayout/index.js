import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const ProductDetailLayout = ({children}) => {
    return (
        <>
            <header>
                <h1>Product Detail Layout</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/about/company">Company</Link>
                    <Link href="/products">Products</Link>
                </nav>
            </header>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default ProductDetailLayout;