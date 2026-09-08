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
    activeModalProductId = String(productId);


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
// SHOPPING CART
// =========================
const CART_KEY = "lam-handmade-cart-v1";
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
let activeModalProductId = null;

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotal = document.getElementById("cartTotal");
const cartCheckout = document.getElementById("cartCheckout");
const cartClear = document.getElementById("cartClear");
const modalAddToCart = document.getElementById("modalAddToCart");

function getProduct(id) { return products[id] || products[Number(id)]; }
function parsePrice(text) { return Number(String(text).replace(/\D/g,"") || 0); }
function formatPrice(n) { return new Intl.NumberFormat("vi-VN").format(n) + "đ"; }

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function renderCart() {
    cartCount.textContent = cart.reduce((sum,item) => sum + item.qty, 0);
    cartItems.innerHTML = "";
    cartEmpty.style.display = cart.length ? "none" : "block";

    let total = 0;

    cart.forEach(item => {
        const product = getProduct(item.id);
        if (!product) return;

        const unit = parsePrice(product.price);
        total += unit * item.qty;

        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <div class="cart-item-price">${product.price}</div>
                <div class="cart-item-bottom">
                    <div class="cart-qty">
                        <button data-cart-minus="${item.id}" type="button">−</button>
                        <span>${item.qty}</span>
                        <button data-cart-plus="${item.id}" type="button">+</button>
                    </div>
                    <button class="cart-remove" data-cart-remove="${item.id}" type="button">Xóa</button>
                </div>
            </div>`;
        cartItems.appendChild(row);
    });

    cartTotal.textContent = formatPrice(total);
    saveCart();
}

function toast(message) {
    let el = document.querySelector(".cart-toast");
    if (!el) {
        el = document.createElement("div");
        el.className = "cart-toast";
        document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 1800);
}

function addToCart(id) {
    id = String(id);
    const product = getProduct(id);
    if (!product) return;

    const existing = cart.find(item => String(item.id) === id);
    if (existing) existing.qty += 1;
    else cart.push({id, qty:1});

    renderCart();
    toast("Đã thêm vào giỏ: " + product.name);
}

function changeQty(id, change) {
    id = String(id);
    const item = cart.find(item => String(item.id) === id);
    if (!item) return;
    item.qty += change;
    if (item.qty <= 0) cart = cart.filter(item => String(item.id) !== id);
    renderCart();
}

function removeItem(id) {
    cart = cart.filter(item => String(item.id) !== String(id));
    renderCart();
}

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    if (!modal.classList.contains("open")) document.body.style.overflow = "";
}

document.querySelectorAll("[data-cart-product]").forEach(button => {
    button.addEventListener("click", () => addToCart(button.dataset.cartProduct));
});

cartButton.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartItems.addEventListener("click", event => {
    const minus = event.target.closest("[data-cart-minus]");
    const plus = event.target.closest("[data-cart-plus]");
    const remove = event.target.closest("[data-cart-remove]");
    if (minus) changeQty(minus.dataset.cartMinus, -1);
    if (plus) changeQty(plus.dataset.cartPlus, 1);
    if (remove) removeItem(remove.dataset.cartRemove);
});

cartClear.addEventListener("click", () => {
    cart = [];
    renderCart();
});

modalAddToCart.addEventListener("click", () => {
    if (activeModalProductId !== null) addToCart(activeModalProductId);
});

cartCheckout.addEventListener("click", () => {
    if (!cart.length) {
        toast("Giỏ hàng đang trống.");
        return;
    }

    let total = 0;
    const lines = cart.map((item,index) => {
        const product = getProduct(item.id);
        const unit = parsePrice(product.price);
        total += unit * item.qty;
        return `${index+1}. ${product.name} x${item.qty} - ${formatPrice(unit*item.qty)}`;
    });

    const message =
        "Chào Lam Handmade, tôi muốn đặt các sản phẩm sau:\n\n" +
        lines.join("\n") +
        "\n\nTổng tạm tính: " + formatPrice(total) +
        "\n\nNhờ shop tư vấn giúp tôi về màu sắc và phí vận chuyển.";

    window.open("https://wa.me/84869906206?text=" + encodeURIComponent(message), "_blank");
});

renderCart();


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