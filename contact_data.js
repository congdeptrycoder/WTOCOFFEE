const scriptURL = "https://script.google.com/macros/s/AKfycbwAdIPy817myBsdaPxm2goOojprUGkVRThLAQaauiHLr3AL_dneYJDUigDB3Ov1CtZY/exec";

document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload lại trang
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
    // Lấy dữ liệu từ form
    const formData = new FormData(this);
    const data = {
        firstname: formData.get('first-name'),
        lastname: formData.get('last-name'),
        location: formData.get('location'),
        product: formData.get('product'),
        message: formData.get('message'),
        social: formData.get('social-platform'),
        socialaccount: formData.get('social-input')
    };

    // Gửi dữ liệu đến Google Apps Script bằng fetch
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
    })
        .then(() => {
            console.log('Success');
            alert('Dữ liệu đã được gửi thành công!');
            // Reset form sau khi gửi
            document.getElementById('contact_form').reset();
            // Ẩn loading screen khi xử lý hoàn tất
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
        })
        .catch(error => {
            console.log(data);
            console.error('Error:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại sau!');
            // Ẩn loading screen khi xử lý hoàn tất
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
        });
});