const productList = [
    { 
        id: "1", 
        name: "Bàng Singapore", 
        price: "130.000", 
        image: "../assets/images/bang-singapore-phong-thuy.jpg", 
        productLink: "product-detail.html", 
        desc: "Cây Bàng Singapore có vóc dáng thẳng đứng, lá to bản màu xanh đậm, gân lá rõ nét. Cây mang lại vẻ đẹp sang trọng, hiện đại cho không gian nội thất, đồng thời giúp thanh lọc không khí, đại diện cho sự may mắn và tài lộc." 
    },
    { 
        id: "2", 
        name: "Cây Hạnh Phúc", 
        price: "155.000", 
        image: "../assets/images/cay-hanh-phuc.jpg", 
        productLink: "product-detail.html", 
        desc: "Cây Hạnh Phúc nổi bật với những tán lá xanh xum xuê, tượng trưng cho niềm vui và sự đầm ấm. Trồng cây trong nhà không chỉ tạo mảng xanh mát mắt mà còn mang lại năng lượng tích cực, sự gắn kết và bình yên cho các thành viên trong gia đình." 
    },
    { 
        id: "3", 
        name: "Cây Kim Tiền", 
        price: "150.000", 
        image: "../assets/images/cay-kiem-tien.jpg", 
        productLink: "product-detail.html", 
        desc: "Cây Kim Tiền có thân vươn cao, lá kép mọng nước mọc đối xứng như những đồng tiền cổ. Đây là loài cây phong thủy hàng đầu, đại diện cho sự giàu sang, phú quý, mang đến vượng khí và may mắn cho gia chủ trong công việc lẫn cuộc sống." 
    },
    { 
        id: "4", 
        name: "Cây Lan Ý", 
        price: "100.000", 
        image: "../assets/images/cay-lan-y.jpg", 
        productLink: "product-detail.html", 
        desc: "Lan Ý sở hữu vẻ đẹp thanh tao với những bông hoa vươn thẳng màu trắng tinh khôi. Cây có khả năng lọc sạch các độc tố và bức xạ từ thiết bị điện tử, giúp không gian sống trở nên trong lành, thư thái và giảm bớt căng thẳng." 
    },
    { 
        id: "5", 
        name: "Cây Lưỡi Hổ", 
        price: "120.000", 
        image: "../assets/images/luoi-ho.jpg", 
        productLink: "product-detail.html", 
        desc: "Cây Lưỡi Hổ vươn thẳng đứng, lá có viền vàng và những vằn xanh đặc trưng. Sức sống mãnh liệt của cây tượng trưng cho sự kiên cường, xua đuổi tà khí. Đặc biệt, Lưỡi Hổ còn có khả năng cung cấp oxy vào ban đêm, rất tốt cho giấc ngủ." 
    },
    { 
        id: "6", 
        name: "Cây Ngũ Gia Bì", 
        price: "140.000", 
        image: "../assets/images/cay-ngu-giai-bi.jpg", 
        productLink: "product-detail.html", 
        desc: "Ngũ Gia Bì có lá mọc kép chân vịt, xanh bóng quanh năm và tỏa ra mùi hương thoang thoảng. Ngoài ý nghĩa động viên tinh thần, mang lại sự phát đạt, cây còn nổi tiếng với công dụng xua đuổi muỗi và côn trùng vô cùng hiệu quả." 
    },
    { 
        id: "7", 
        name: "Trầu Bà Đế Vương", 
        price: "180.000", 
        image: "../assets/images/trau-ba-de-vuong.jpg", 
        productLink: "product-detail.html", 
        desc: "Trầu Bà Đế Vương mang vẻ đẹp quyền uy với những chiếc lá to, dày, bóng bẩy và màu sắc đậm đà. Cây thể hiện tinh thần lãnh đạo, ý chí vươn lên mạnh mẽ, rất thích hợp đặt trên bàn làm việc để thu hút tài lộc và sự thăng tiến." 
    },
    { 
        id: "8", 
        name: "Tùng La Hán", 
        price: "500.000", 
        image: "../assets/images/cay-tung-la-hang.jpg", 
        productLink: "product-detail.html", 
        desc: "Tùng La Hán là dòng cây cảnh cao cấp với dáng vẻ phong trần, cành lá xếp lớp gọn gàng. Loài cây này mang ý nghĩa của sự trường thọ, sức khỏe dồi dào và khí chất bậc quân tử, giúp xua đuổi điềm xấu, thanh lọc không gian." 
    },
    { 
        id: "9", 
        name: "Sen Đá", 
        price: "15.000", 
        image: "../assets/images/sen-da.jpg", 
        productLink: "product-detail.html", 
        desc: "Sen Đá tuy nhỏ nhắn nhưng có sức sống vô cùng dẻo dai, lá mọng nước xếp thành hình hoa thị tuyệt đẹp. Cây tượng trưng cho tình yêu và tình bạn vĩnh cửu, bền chặt, là điểm nhấn xinh xắn cho góc học tập và làm việc." 
    },
    { 
        id: "10", 
        name: "Xương Rồng", 
        price: "20.000", 
        image: "../assets/images/xuong-rong.jpg", 
        productLink: "product-detail.html", 
        desc: "Xương Rồng có nhiều hình dáng độc đáo, thân mọng nước và được bao bọc bởi những lớp gai bảo vệ. Dù sống trong môi trường khắc nghiệt, cây vẫn sinh trưởng tốt, đại diện cho ý chí vươn lên không ngừng, sự mạnh mẽ và kiên cường." 
    }
];

// Hàm tạo phần tử bằng DOM thuần (CREATE)
function addProduct(id, name, price, image, hyperLink) {
    const productItem = document.createElement("div");
    productItem.className = "product-item col mb-3";

    const card = document.createElement("div");
    card.className = "card h-100 shadow-sm border-0";

    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", image);
    imgNode.setAttribute("alt", name);
    imgNode.className = "card-img-top object-fit-cover ratio ratio-1x1";
    
    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center d-flex flex-column p-3";

    const title = document.createElement("h6");
    title.className = "card-title fw-bold mb-1 text-truncate";
    title.textContent = name;

    const priceText = document.createElement("p");
    priceText.className = "text-danger fw-bold mb-3";
    priceText.textContent = price + "đ";

    // Khung nút bấm
    const actionButtons = document.createElement("div");
    actionButtons.className = "d-flex justify-content-center gap-2 mt-auto";

    const productLink = document.createElement("a");
    productLink.textContent = "Xem";
    productLink.href = hyperLink + "?id=" + id;
    productLink.className = "btn btn-outline-info btn-sm w-50";

    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Thêm giỏ";
    btnAdd.className = "btn btn-success btn-sm w-50 add-to-cart";
    // Đính kèm dữ liệu để DOM dễ dàng lấy khi click
    btnAdd.setAttribute("data-id", id);
    btnAdd.setAttribute("data-name", name);
    btnAdd.setAttribute("data-price", price);

    // Lắp ráp các node lại với nhau
    actionButtons.appendChild(productLink);
    actionButtons.appendChild(btnAdd);
    cardBody.appendChild(title);
    cardBody.appendChild(priceText);
    cardBody.appendChild(actionButtons);
    card.appendChild(imgNode);
    card.appendChild(cardBody);
    productItem.appendChild(card);

    document.getElementById("product-list").appendChild(productItem);
}