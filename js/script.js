const likeBtn = document.querySelector(".like");
const shareBtn = document.querySelector(".share");

let clicked = false;
likeBtn.addEventListener("click", () => {
    if(!clicked){
        clicked = true;
        likeBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        likeBtn.style.color = 'var(--primary)';
    }else{
        clicked = false;
        likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        likeBtn.style.color = 'var(--font_color)';
    }
})