let mainColor = localStorage.getItem('color-option');
console.log(mainColor);

if(mainColor !== null) {
    document.documentElement.style.setProperty('--main--color', localStorage.getItem('color-option'));
}

let togglebtn = document.querySelector("button");
let navUl = document.querySelector(".nav-ul");
let toggleColorBtn = document.querySelector(".gear-btn");
let sittingBox = document.querySelector(".sitting-box");

let colorList = document.querySelectorAll('.color-list li');

togglebtn.onclick = function () {
    navUl.classList.toggle("open")
}
document.addEventListener("click", (e) => {
    if(e.target !== togglebtn && e.target !== navUl){
       
    }
})

var landingPage = document.querySelector(".landing-page");
let imageArray = ['bg2.jpg', 'bg6.jpg', 'bg7.jpg', 'bg3.jpg'];
landingPage.style.backgroundImage = 'url("images/bg3.jpg")';


setInterval(() => {
    let randomImg = Math.floor(Math.random() * imageArray.length);

    landingPage.style.backgroundImage = 'url("images/' + imageArray[randomImg] +'")';
},2000)


toggleColorBtn.onclick = function () {
    sittingBox.classList.toggle('open-gear');
}

colorList.forEach (li => {
    li.addEventListener ('click', (e) => {
        document.documentElement.style.setProperty ('--main--color', e.target.dataset.color);
       localStorage.setItem ('color-option', e.target.dataset.color)
        
    });
});