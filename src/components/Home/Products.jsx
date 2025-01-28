import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import SectionTitle from '../shared/SectionTitle';
import ProductCard from './ProductCard';

const Services = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data.slice(0, 6)))
            .catch(error =>
            Swal.fire({
                title: "Error",
                text: "Products Data Can't be Loaded",
                icon: "error"
            })
            )
    }, []);
    return (
        <>
            <SectionTitle>Products</SectionTitle>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-between py-5'>
                {
                    products && products.map((product, index) =>
                        <ProductCard product={product} key={index}></ProductCard>
                    )
                }
            </div>
        </>
    );
};

export default Services;