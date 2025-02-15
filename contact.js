document.getElementById('social-platform').addEventListener('change', function () {
    const socialPlatform = this.value;
    const socialInputGroup = document.getElementById('social-input-group');
    let inputHTML = '';

    switch (socialPlatform) {
        case 'telegram':
            inputHTML = '<input type="text" id="social-input" name="social-input" placeholder="ID @" required>';
            break;
        case 'facebook':
            inputHTML = '<input type="text" id="social-input" name="social-input" placeholder="Profile Link" required>';
            break;
        case 'gmail':
            inputHTML = '<input type="email" id="social-input" name="social-input" placeholder="Email" required>';
            break;
        case 'whatsapp':
            inputHTML = '<input type="tel" id="social-input" name="social-input" placeholder="Phone" required>';
            break;
    }

    socialInputGroup.innerHTML = `<label for="social-input">Account:</label>${inputHTML}`;

    // Thêm sự kiện xóa highlight cho trường social-input
    const socialInput = document.getElementById('social-input');
    if (socialInput) {
        socialInput.addEventListener('input', function () {
            this.classList.remove('invalid');
        });
    }
});

// Thêm sự kiện xóa highlight cho tất cả các trường
document.querySelectorAll('#contact_form input, #contact_form select, #contact_form textarea').forEach(element => {
    element.addEventListener('input', function () {
        this.classList.remove('invalid');
    });
});