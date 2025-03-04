import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} width={400} />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
