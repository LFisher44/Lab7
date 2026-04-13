const defaultLink = document.getElementById("default");
const darkLink = document.getElementById("dark");
const lightLink = document.getElementById("light");

defaultLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.remove("force-dark");
    document.body.classList.remove("force-light");
});

darkLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.add("force-dark");
    document.body.classList.remove("force-light");
});

lightLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.add("force-light");
    document.body.classList.remove("force-dark");
});