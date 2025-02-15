// Hàm kiểm tra dữ liệu
function validateForm() {
    let isValid = true;

    // Kiểm tra các trường input và textarea
    const requiredInputs = ['first-name', 'last-name', 'location', 'message'];
    requiredInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element && element.value.trim() === '') {
            element.classList.add('invalid');
            isValid = false;
        } else if (element) {
            element.classList.remove('invalid');
        }
    });

    // Kiểm tra các trường select
    const requiredSelects = ['product', 'social-platform'];
    requiredSelects.forEach(id => {
        const element = document.getElementById(id);
        if (element && element.value === 'none') {
            element.classList.add('invalid');
            isValid = false;
        } else if (element) {
            element.classList.remove('invalid');
        }
    });

    // Kiểm tra trường social-input nếu social-platform đã chọn
    const socialPlatform = document.getElementById('social-platform');
    if (socialPlatform && socialPlatform.value !== 'none') {
        const socialInput = document.getElementById('social-input');
        if (!socialInput || socialInput.value.trim() === '') {
            if (socialInput) {
                socialInput.classList.add('invalid');
            } else {
                socialPlatform.classList.add('invalid');
            }
            isValid = false;
        } else {
            socialInput.classList.remove('invalid');
        }
    }

    return isValid;
}
const scriptURL = "https://script.google.com/macros/s/AKfycbwAdIPy817myBsdaPxm2goOojprUGkVRThLAQaauiHLr3AL_dneYJDUigDB3Ov1CtZY/exec";

document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload lại trang
    // Kiểm tra dữ liệu trước khi gửi
    if (!validateForm()) {
        return;
    }
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
            alert('Thank you for signing up. We will contact you as soon as possible within 24 hours.');
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
            alert('Sorry!! Try again!!');
            // Ẩn loading screen khi xử lý hoàn tất
            if (loadingScreen) {
                loadingScreen.style.display = 'none';
            }
        });
});