import { useState, useEffect } from "react"; // Import useState và useEffect từ thư viện React để quản lý trạng thái và xử lý hiệu ứng.
import axios from "axios"; // Import axios để thực hiện các yêu cầu HTTP tới API.

const ProductPage = () => {

    const [listproduct, SetListProduct] = useState([]); // Khai báo state listproduct với giá trị mặc định là một mảng rỗng để lưu trữ danh sách sản phẩm.
    
    useEffect(() => {
        const LayDulieutuBackend = async () => { // Khởi tạo hàm bất đồng bộ để lấy dữ liệu từ backend.
            try {
                const res = await axios.get("https://fakestoreapi.com/products/"); // Gửi yêu cầu GET tới API để lấy danh sách sản phẩm.
                SetListProduct(res.data); // Cập nhật state listproduct với dữ liệu nhận được từ API.
            } catch (err) {
                console.log(err.message); // Nếu xảy ra lỗi, log thông báo lỗi ra console.
            }
        };
        LayDulieutuBackend(); // Gọi hàm để lấy dữ liệu từ backend khi component được render lần đầu.
    }, []); // Tham số thứ hai là mảng rỗng, giúp useEffect chỉ chạy một lần khi component được gắn vào DOM.

    return (
        <div class="product-list"> {/* Div chứa toàn bộ danh sách sản phẩm */}
            {
                listproduct.map(phantu => { // Lặp qua từng phần tử trong mảng listproduct và render từng sản phẩm.
                    return (
                        <div class="product" key={phantu.id}> {/* Khối chứa thông tin từng sản phẩm */}
                            <a href="/ProductDetail">
                                <img src={phantu.image} alt={phantu.title} /> {/* Hiển thị hình ảnh sản phẩm */}
                            </a>
                            <div class="product-info"> {/* Khối chứa thông tin chi tiết của sản phẩm */}
                                <a href="/ProductDetail" class="product-title">
                                    <h2 class="product-title">{phantu.title}</h2> {/* Hiển thị tiêu đề sản phẩm */}
                                </a>
                                <p class="product-price">{phantu.price}</p> {/* Hiển thị giá sản phẩm */}
                                <p class="product-description">{phantu.description}</p> {/* Hiển thị mô tả sản phẩm */}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProductPage; // Xuất component ProductPage để có thể được import ở nơi khác.
