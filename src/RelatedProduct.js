import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedProduct = ({ category, currentId }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const res = await axios.get('https://6731c05f7aaf2a9aff11dd05.mockapi.io/products');
                const filteredProducts = res.data.filter(
                    product => product.category === category && product.id !== currentId
                );
                setRelatedProducts(filteredProducts);
            } catch (err) {
                console.error("Error fetching related products: ", err.message);
            }
        };
        fetchRelatedProducts();
    }, [category, currentId]);

    return (
        <div className="related-products">
            <h3>Sản phẩm liên quan</h3>
            <div className="related-product-list">
                {relatedProducts.map(product => (
                    <div key={product.id} className="related-product-item">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>Giá: {product.price}</p>
                        <a href={`/product/${product.id}`}>Xem chi tiết</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;