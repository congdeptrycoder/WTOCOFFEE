let currentIndex = 0;
const images = document.querySelectorAll('.banner_image img');
const dots = document.querySelectorAll('.banner_bar .dot');
/*show ảnh*/
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
    });

    images[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 5000); // Tự động chuyển ảnh sau mỗi 5 giây

// Ẩn màn hình loading khi trang tải xong
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});
const file_list = [
    "index.html",
    "contact.html",
    "arabica.html",
    "robusta.html",
    "coffeebrew.html",
    "coffeepacking.html",
    "aboutus.html",
    "greenbeans.html",
    "luongvantu.html"
]

function searchContent() {
    const keyword = getKeyword();
    if (!keyword) {
        alert("X Vui lòng nhập từ khóa. X");
        return;
    }
    let results = [];

    let searchPromises = file_list.map(file => {
        return fetch(file)
            .then(response => response.text())
            .then(text => {
                if (text.toLowerCase().includes(keyword.toLowerCase())) {
                    // Lấy tiêu đề trang từ thẻ <title>
                    let titleMatch = text.match(/<title>(.*?)<\/title>/i);
                    let pageTitle = titleMatch ? titleMatch[1] : file; // Nếu không có <title>, dùng tên file

                    results.push({ title: pageTitle, link: file });
                }
            })
            .catch(error => console.error(`Lỗi khi tải ${file}:`, error));
    });

    Promise.all(searchPromises).then(() => {
        localStorage.setItem("searchResults", JSON.stringify(results));
        localStorage.setItem("searchKeyword", keyword);
        window.location.href = "search_results.html"; // Chuyển hướng
    });
}
function getKeyword() {
    return document.getElementById("searchenter").value.trim();
}
document.getElementById('search').addEventListener('click', searchContent);
document.getElementById('searchenter').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchContent();
    }
});


/*scroll search header*/
document.getElementById("search_footer").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

    // Lấy phần tử ô tìm kiếm
    let searchBox = document.getElementById("searchenter");

    if (searchBox) {
        searchBox.scrollIntoView({ behavior: "smooth", block: "center" }); // Cuộn mượt đến ô tìm kiếm
        searchBox.focus(); // Tự động focus vào ô tìm kiếm
    }
});