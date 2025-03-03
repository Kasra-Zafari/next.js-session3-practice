import Layout from "@/components/Layout";
import AboutLayout from "@/components/Layout/AboutLayout";
import CompanyLayout from "@/components/Layout/CompanyLayout";
import ProductsLayout from "@/components/Layout/ProductsLayout";
import ProductDetailLayout from "@/components/Layout/ProductDetailLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname() || "";

  const LayouComponent =
    pathname === "/about"
      ? AboutLayout
      : pathname === "/about/company"
      ? CompanyLayout
      : pathname === "/products"
      ? ProductsLayout
      : pathname?.startsWith("/products/")
      ? ProductDetailLayout
      : Layout;

  return (
    <LayouComponent>
      <Component {...pageProps} />
    </LayouComponent>
  );
}
