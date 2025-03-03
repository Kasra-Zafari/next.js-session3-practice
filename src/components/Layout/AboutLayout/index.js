import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const AboutLayout = ({children}) => {
    return (
        <>
            <header>
                <h1>About Layout</h1>
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

export default AboutLayout;