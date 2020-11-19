let rand1 = Math.floor(Math.random() * 6 + 1);
let rand2 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + rand1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + rand2 + ".png");

if(rand1 > rand2)
{
    document.querySelector("h1").innerHTML = "🎌 Ck 🐷 Thắng rồi!";
}
else if(rand1 < rand2)
{
    document.querySelector("h1").innerHTML = "Vk 🐰 Thắng rồi! 🎌";
}
else
{
    document.querySelector("h1").innerHTML = "🎌 Hòa! 🎌";
}