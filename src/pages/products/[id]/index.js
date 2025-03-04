import Head from "next/head";
import { useRouter } from "next/router";

const ProductDetail = ({ product, error }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-warning">Product not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.title}
              width={400}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3 className="text-success">${product.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Failed to fetch paths. Status: ${res.status}`);
    }

    const products = await res.json();
    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error("Error fetching product paths:", error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { id } = params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
    }

    const product = await res.json();

    return {
      props: { product },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null, error: "Failed to fetch product data." },
      revalidate: 60,
    };
  }
}

export default ProductDetail;
