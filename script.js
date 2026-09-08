// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuToggle.textContent = "×";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


// =========================
// PRODUCTS
// =========================

const products = {

    1: {

        name: "Túi Macramé Handmade",

        price: "880.000đ",

        material: "Dây cotton 4mm",

        color: "Xám",

        time: "Khoảng 3 ngày",

        description:
            "Túi Macramé được làm thủ công từ dây cotton 4mm, mang phong cách mộc mạc, tự nhiên và nhẹ nhàng.",

        images: [
            "images/hero-macrame.jpg"
        ]

    },


    2: {

        name: "Túi Macramé Handmade Xanh Lá",

        price: "750.000đ",

        material: "Dây cotton 3mm",

        color: "Xanh lá",

        time: "Khoảng 1 ngày",

        description:
            "Túi Macramé màu xanh lá được làm thủ công từ dây cotton 3mm, kết hợp tay cầm gỗ và kiểu đan nổi bật.",

        images: [
            "images/green-bag.jpg"
        ]

    },


    3: {

        name: "Túi Macramé Handmade Xám",

        price: "400.000đ",

        material: "Dây cotton 4mm",

        color: "Xám",

        time: "Khoảng 2 ngày",

        description:
            "Túi Macramé màu xám được làm thủ công từ dây cotton 4mm với thiết kế tay cầm liền thân và phong cách tối giản.",

        images: [
            "images/gray-bag.jpg",
            "images/gray-bag-model.jpg"
        ]

    },

    4: {
        name: "Vòng cổ Macramé Xanh Ngọc",
        price: "450.000đ",
        material: "Macramé thủ công",
        color: "Xanh ngọc",
        time: "Theo đơn",
        description:
            "Vòng cổ Macramé tông xanh ngọc với điểm nhấn hồng, phù hợp phong cách tự nhiên, boho và nhẹ nhàng.",
        images: [
            "images/necklace-teal.jpg",
            "images/necklace-teal-model.jpg"
        ]
    },

    5: {
        name: "Vòng cổ Macramé Xám",
        price: "450.000đ",
        material: "Macramé thủ công",
        color: "Xám",
        time: "Theo đơn",
        description:
            "Vòng cổ Macramé tông xám với điểm nhấn hồng, thiết kế gọn và dễ phối cùng nhiều phong cách.",
        images: [
            "images/necklace-gray.jpg",
            "images/necklace-gray-model.jpg"
        ]
    },

    6: {
        name: "Vòng cổ Macramé Xanh Lá",
        price: "450.000đ",
        material: "Macramé thủ công",
        color: "Xanh lá",
        time: "Theo đơn",
        description:
            "Vòng cổ Macramé xanh lá mang cảm hứng thiên nhiên, được thắt thủ công với phần trung tâm nổi bật.",
        images: [
            "images/necklace-green.jpg",
            "images/necklace-green-model.jpg"
        ]
    },

    7: {
        name: "Vòng cổ Macramé Xanh Dương",
        price: "450.000đ",
        material: "Macramé thủ công",
        color: "Xanh dương",
        time: "Theo đơn",
        description:
            "Vòng cổ Macramé xanh dương với thiết kế thanh mảnh, tạo điểm nhấn rõ nhưng vẫn nhẹ nhàng khi đeo.",
        images: [
            "images/necklace-blue.jpg",
            "images/necklace-blue-model.jpg"
        ]
    },

    8: {
        name: "Vòng cổ Macramé Đen",
        price: "450.000đ",
        material: "Macramé thủ công",
        color: "Đen",
        time: "Theo đơn",
        description:
            "Vòng cổ Macramé tông đen với điểm nhấn xanh, phù hợp phong cách cá tính và tối giản.",
        images: [
            "images/necklace-black.jpg"
        ]
    }

};


// =========================
// MODAL
// =========================

const modal = document.getElementById("productModal");

const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");

const modalName = document.getElementById("modalName");

const modalPrice = document.getElementById("modalPrice");

const modalDescription =
    document.getElementById("modalDescription");

const modalMaterial =
    document.getElementById("modalMaterial");

const modalColor =
    document.getElementById("modalColor");

const modalTime =
    document.getElementById("modalTime");

const thumbnailContainer =
    document.getElementById("thumbnailContainer");

const whatsappOrder =
    document.getElementById("whatsappOrder");


function showProduct(productId) {

    const product = products[productId];


    if (!product) {

        return;

    }


    modalName.textContent =
        product.name;

    modalPrice.textContent =
        product.price;

    modalDescription.textContent =
        product.description;

    modalMaterial.textContent =
        product.material;

    modalColor.textContent =
        product.color;

    modalTime.textContent =
        product.time;


    modalImage.src =
        product.images[0];

    modalImage.alt =
        product.name;


    // XÓA ẢNH NHỎ CŨ

    thumbnailContainer.innerHTML = "";


    // CHỈ TẠO ẢNH NHỎ NẾU CÓ NHIỀU HƠN 1 ẢNH

    if (product.images.length > 1) {

        product.images.forEach(function (imagePath, index) {

            const button =
                document.createElement("button");


            button.className =
                "thumbnail";


            if (index === 0) {

                button.classList.add("active");

            }


            const image =
                document.createElement("img");


            image.src =
                imagePath;

            image.alt =
                product.name;


            button.appendChild(image);


            button.addEventListener("click", function () {

                modalImage.src =
                    imagePath;


                thumbnailContainer
                    .querySelectorAll(".thumbnail")
                    .forEach(function (item) {

                        item.classList.remove("active");

                    });


                button.classList.add("active");

            });


            thumbnailContainer.appendChild(button);

        });

    }


    const message =
        "Chào, tôi muốn hỏi về " +
        product.name +
        " giá " +
        product.price +
        ".";


    whatsappOrder.href =
        "https://wa.me/84869906206?text=" +
        encodeURIComponent(message);


    modal.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


// TẤT CẢ NÚT XEM CHI TIẾT

document
    .querySelectorAll(".detail-button")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            const productId =
                button.getAttribute("data-product");

            showProduct(productId);

        });

    });


// ĐÓNG MODAL

function closeProductModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProductModal
    );

}


if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeProductModal();

        }

    });

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProductModal();

    }

});


// =========================
// FAQ
// =========================

document
    .querySelectorAll(".faq-question")
    .forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem =
                question.parentElement;

            faqItem.classList.toggle("active");

        });

    });


// =========================
// FLOATING ORDER
// =========================

const floatingButton =
    document.getElementById("floatingButton");

const floatingMenu =
    document.getElementById("floatingMenu");


if (floatingButton && floatingMenu) {

    floatingButton.addEventListener("click", function (event) {

        event.stopPropagation();

        floatingMenu.classList.toggle("active");

    });


    document.addEventListener("click", function (event) {

        if (!floatingMenu.contains(event.target)) {

            floatingMenu.classList.remove("active");

        }

    });

}