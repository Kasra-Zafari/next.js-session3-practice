import Head from "next/head";
import Link from "next/link";

const ProductsPage = ({ products, error }) => {
  if (error) {
    return <p className="text-center text-danger">Failed to load products. Please try again later.</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center">Loading...</p>;
  }

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
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5
                      className="card-title"
                      style={{ minHeight: "48px", overflow: "hidden" }}
                    >
                      {product.title}
                    </h5>
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

export async function getStaticProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const products = await res.json();

    return {
      props: { products },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: { products: null, error: "Failed to fetch products." },
      revalidate: 60,
    };
  }
}

export default ProductsPage;
