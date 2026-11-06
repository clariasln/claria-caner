document.getElementById("password").addEventListener("keydown", e => {
    if(e.key === "Enter") login();
});

function logout() {
    document.getElementById("app").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("password").value = "";
}

function showPage(id, button) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    document.querySelectorAll(".nav").forEach(nav => {
        nav.classList.remove("active");
    });

    button.classList.add("active");
}

function toggleCase(id) {
    const element = document.getElementById(id);
    element.classList.toggle("open");
}

function openPhoto(src) {
    document.getElementById("largePhoto").src = src;
    document.getElementById("photoViewer").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photoViewer").style.display = "none";
}

function enterSite() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("app").style.display = "block";
}