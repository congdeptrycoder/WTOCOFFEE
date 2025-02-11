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
});