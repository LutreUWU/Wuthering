function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

video = document.getElementById("bg")
const div = document.getElementById("mainDiv")
div.addEventListener("click", function(){
    video.play(); 
});

async function create_snow(){
    ice = document.getElementById("ice")
    for (let i = 0; i < 30; i++){
        var size = Math.random() * 1; 
        var left = Math.random() * 100; // Position horizontale aléatoire   
        let snow  = document.createElement("div");
        snow.classList.add("ice")
        snow.style.width = `${size}vh`
        snow.style.height = `${size}vh`
        snow.style.left = `${left}%`
        snow.style.animation = "translate "+ 7 +"s linear infinite, wind "+ 7 +"s linear infinite";
        ice.appendChild(snow);
        await sleep(1000)
    }
}
create_snow()
