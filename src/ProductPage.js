import { useState, useEffect } from "react";
import axios from "axios";

const ProductPage=()=>
    {

        const [listproduct, SetListProduct]=useState([]);/*Mới đầu cái mảng trong useState là rỗng*/
        useEffect(()=>
            {
            
                const LayDulieutuBackend= async ()=>
                    {
                        try
                        {
                            const res= await axios.get("https://fakestoreapi.com/products/");
                            SetListProduct(res.data);
            
                        }catch (err)
                        {
                            console.log(err.message)
                        }
            
                    }            
                    LayDulieutuBackend();            

            }
        ,[]);
    
        return (
            
                 <div class="product-list">
                
                {
                    listproduct.map(phantu=>{

                        return (


                            <div class="product">
                            <a href="/ProductDetail">
                             <img src={phantu.image} alt={phantu.title}/>
                            </a>
                            <div class="product-info">
                            <a href="/ProductDetail" class="product-title">
                                <h2 class="product-title">{phantu.title}</h2>
                            </a>
                                <p class="product-price">{phantu.price}</p>
                                <p class="product-description">{phantu.description}</p>
                            </div>
                            </div>

                            
                        );
                    }

                    )
                }
                
                </div>
            
        );
    } 
export default ProductPage;