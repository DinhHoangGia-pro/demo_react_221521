import { useState, useEffect } from "react"; // Import useState và useEffect từ thư viện React để quản lý trạng thái và xử lý hiệu ứng.
import axios from "axios"; 
import { useParams } from 'react-router-dom';

const EditProduct=()=>
{

    const { id } = useParams(); // lấy id từ URL

    const id1= id || 0;

    

    const [product, setProduct]=useState({
        "id": id1,
        "title": "",
        "price": 0,
        "description": "",
        "category": "",
        "image": ""
        });

    useEffect(() => {

       

            const LayDulieutuBackend = async () => { // Khởi tạo hàm bất đồng bộ để lấy dữ liệu từ backend.
                try {
                    const res = await axios.get('https://fakestoreapi.com/products/'+id);
                    setProduct(res.data); // Cập nhật state listproduct với dữ liệu nhận được từ API.
                } catch (err) {
                    console.log(err.message); // Nếu xảy ra lỗi, log thông báo lỗi ra console.
                }
            };
            if (id1>0)
            {  /*Update*/
               LayDulieutuBackend(); // Gọi hàm để lấy dữ liệu từ backend khi component được render lần đầu.
            }         
          
           
        }, []);


        const handleChange = (e) => {
            const { name, value } = e.target;

            console.log("Ten the:"+name);
            console.log("value:"+value);

            // const newproduct={...product,  [name]: value};
            // setProduct(newproduct);
            
            setProduct((prevProduct) => ({
                ...prevProduct,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                if (id1===0) {
                    // If adding a new product, use POST
                    const response = await axios.post(`https://fakestoreapi.com/products`, product);
                  
                    //if (response.status)
                   
                    //setProduct(res.data);

                    if ((response.status===200)||(response.status===201))
                        {
                            alert("Thêm sản phẩm thành công");
                            window.location.href="/";
                        }

                } else {
                    // If editing, use PUT
                    const response = await axios.put(`https://fakestoreapi.com/products/${product.id}`, product);
                    //onSave(response.data); // Pass updated product back to parent component
                   
                    if ((response.status===200)||(response.status===201))
                    {
                        alert("Cap nhat thanh cong");
                        window.location.href="/product/"+product.id;
                    }


                    //alert(response.status);
                }
            } catch (err) {
                console.log(err.message);
            }
        };

        return (

            <div>
                 <form onSubmit={handleSubmit} className="edit-product-form">
                <label>Title:
                    <input type="text" name="title" value={product.title} onChange={handleChange} />
                </label>
                <label>Price:
                    <input type="number" name="price" value={product.price} onChange={handleChange} />
                </label>
                <label>Description:
                    <textarea name="description" value={product.description} onChange={handleChange} />
                </label>
                <label>Category:
                    <input type="text" name="category" value={product.category} onChange={handleChange} />
                </label>
                <label>Image URL:
                    <input type="text" name="image" value={product.image} onChange={handleChange} />
                </label>
                <button type="submit" className="save-button">Save</button>
                <button type="button"  className="cancel-button">Cancel</button>
            </form>
            </div>
        );

}

export default EditProduct;