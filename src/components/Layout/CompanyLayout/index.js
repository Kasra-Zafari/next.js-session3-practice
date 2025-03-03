import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const CompanyLayout = ({children}) => {
    return (
        <>
            <header>
                <h1>Company Layout</h1>
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

export default CompanyLayout;