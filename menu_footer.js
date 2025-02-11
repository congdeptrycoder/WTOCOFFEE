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

    }
}
document.getElementById("sendButton").addEventListener("click", function () {
    let inputField = document.querySelector(".footer_page_col input");
    let messagetrue = document.getElementById("messagetrue");
    console.log(messagefalse);
    if (inputField.value.trim() === "") {
        messagetrue.style.display = "none";
        messagefalse.style.display = "block";
    } else {
        messagetrue.style.display = "block";
        messagefalse.style.display = "none";
    }
});