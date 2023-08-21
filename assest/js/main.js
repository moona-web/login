let _btn = document.querySelectorAll('main>div>div:nth-of-type(3)>button')
console.log(_btn);
_btn[0].addEventListener('click' , function(){
    location.assign('assest/index1.html')
})

_btn[1].addEventListener('click' , function(){
    location.assign('assest/index2.html')
})