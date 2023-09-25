const element = document.getElementById("element");
const element1 = document.getElementById("element1");

const lightOnOff = () => {
    setTimeout(() => {
        element.style.display = "none";
        element1.style.display = "block";
    },300)
    setTimeout(() => {
        element.style.display = "block";
        element1.style.display = "none";
    },600)
}
lightOnOff();
setInterval(lightOnOff, 900);