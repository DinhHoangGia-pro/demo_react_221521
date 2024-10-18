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
            <div class="news_left">
                
                {
                    listproduct.map(phantu=>{

                        return (
                            <div class="item">
                            <div class="div_img">
                                <a href="#">
                                        <img class="img-responsive" alt="" src={phantu.image}/>
                                </a>
                            </div>
                            <div class="div_product">
                                    <a href="#" class="news-title">
                                        {phantu.title}  
                                </a>
                                <span class="des_news">
                                        {phantu.description}
                                </span>
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
