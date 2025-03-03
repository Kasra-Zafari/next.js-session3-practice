import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])


    return (
        <>
            <Head>
                <title>
                    Products Page
                </title>
            </Head>
                <h1>Products</h1>
                <section className="row">
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`}>
                            <div key={product.id} className="card">
                                <img src={product.image} alt="" width={150} />
                                <h3 className="cardTitle">{product.title}</h3>
                                <p>{product.category}</p>
                                <p>{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </section>
        </>
    )
}

export default ProductsPage;