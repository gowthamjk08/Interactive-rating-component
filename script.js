let sec1 = document.getElementById('rating-section');
let sec2 = document.getElementById('thankyou-section');
let showRate =document.getElementById('showRate');
let err = document.getElementById('err');

let ratingBtn = document.querySelectorAll('h4');
let rate;
function rating(rateVal){
    ratingBtn.forEach((btn)=>{btn.classList.remove('btn-active')});
    ratingBtn[rateVal-1].classList.add('btn-active');
    rate =rateVal;
    err.classList.remove('err');
}

function submit(){
    if(rate != undefined){
    sec1.style.display="none"
    sec2.style.display="block"
    }
    else{
        err.classList.add('err')
    }
    showRate.innerText = rate;
}