import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home(){
    const [products, setProducts] = useState([]);
    const [searchParams,setSearchPrams] = useSearchParams()

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[searchParams])

    return <Fragment>
       
        <h1 id="products_heading " className="text-center mt-2">2024 Trending Books</h1>

        <section id="products" className="container mt-2">
        <div className="row">
            {products.map(product => <ProductCard product={product} />)}
        </div>
        </section>

    </Fragment>
}