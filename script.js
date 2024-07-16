const images = document.querySelectorAll(".header-slider ul img");

const btnPrevious = document.querySelector(".control_previous");

const btnNext = document.querySelector(".control_next");

const scrolContainer = document.querySelectorAll(".products");

let n = 0   ;

function changeSlide(){
for(let i = 0; i < images.length; i++){
    images[i].style.display = "none";
};
images[n].style.display = "block";

};

changeSlide();

btnPrevious.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = images.length -1;
    }
    changeSlide();
});

btnNext.addEventListener('click', (e)=>{
    if(n < images.length -1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
});

for(const item of crolContainer){
    item.addEventListener("wheel", (e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}