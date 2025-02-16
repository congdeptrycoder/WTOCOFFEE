function blocksubmenu(element) {
    // Tìm submenu và icon của menu được click
    var submenu = element.querySelector(".submenu");
    var icon = element.querySelector("i");


    // Kiểm tra nếu submenu và icon tồn tại
    if (submenu && icon) {
        // Ẩn tất cả các submenu khác (trừ submenu hiện tại)
        document.querySelectorAll(".submenu").forEach(sub => {
            if (sub !== submenu) {
                sub.classList.remove("active");
            }
        });

        // Reset icon của tất cả các menu khác (trừ icon hiện tại)
        document.querySelectorAll("i").forEach(i => {
            if (i !== icon) {
                i.classList.remove("rotate");
            }
        });


        // Toggle class 'active' cho submenu và 'rotate' cho icon
        submenu.classList.toggle("active");

        icon.classList.toggle("rotate");

    } else {
        // Ẩn tất cả các submenu và reset icon
        document.querySelectorAll(".submenu").forEach(sub => sub.classList.remove("active"));
        document.querySelectorAll("i").forEach(icon => icon.classList.remove("rotate"));
        // Reset font-weight của tất cả các li về normal




    }
}
//sign up data mess
const scriptURL = "https://script.google.com/macros/s/AKfycbwAdIPy817myBsdaPxm2goOojprUGkVRThLAQaauiHLr3AL_dneYJDUigDB3Ov1CtZY/exec";

document.getElementById('sendButton').addEventListener('click', function (e) {

    const loadingScreen = document.getElementById('loading-screen');
    let inputField = document.querySelector(".footer_page_col input");
    let messagetrue = document.getElementById("messagetrue");
    let messagefalse = document.getElementById("messagefalse");
    console.log(messagefalse);
    if (inputField.value.trim() === "") {
        messagetrue.style.display = "none";
        messagefalse.style.display = "block";
        return;
    } else {
        messagetrue.style.display = "block";
        messagefalse.style.display = "none";
    }
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }

    const data = {
        firstname: "none",
        lastname: "none",
        location: "none",
        product: "none",
        message: document.getElementById('mess_footer').value,
        social: "none",
        socialaccount: "none"
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