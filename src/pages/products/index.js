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
      });
  }, []);

  return (
    <>
      <Head>
        <title>Products Page</title>
      </Head>
      <div className="container py-5">
        <h1 className="text-center mb-4">Products</h1>
        <section className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <Link href={`/products/${product.id}`} passHref>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    height="200"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      padding: "10px",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">{product.category}</p>
                    <p className="card-text fw-bold">${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
