import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const ProductDetail = () => {

    const router = useRouter();
    const id = router.query.id;
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data);
                })
        }
    }, [id])

    return (
        <>
            <Head>
                <title>
                    {product.title}
                </title>
            </Head>
            <img src={product.image} alt="" width={400} />
            <h1>{product.title}</h1>
        </>
    )
}

export default ProductDetail;