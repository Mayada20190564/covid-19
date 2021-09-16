
let select1 = document.querySelector('#select1');
let select2 = document.querySelector('#select2');
let select3 = document.querySelector('#select3');
let select4 = document.querySelector('#select4');
let select5 = document.querySelector('#select5');
let select6 = document.querySelector('#select6');
// SELECTORs ======
let section1 = document.querySelector('#section1');
let section2 = document.querySelector('#section2');
let section3 = document.querySelector('#section3');
let section4 = document.querySelector('#section4');
let section5 = document.querySelector('#section5');
let section6 = document.querySelector('#section6');
// SECTIONs ========
let H1 = document.querySelector('.H1');
let H2 = document.querySelector('.H2');
let H3 = document.querySelector('.H3');
let H4 = document.querySelector('.H4');
// HEADERs ======
let B1 = document.querySelector('.B1')
let B2 = document.querySelector('.B2')
let B3 = document.querySelector('.B3')
let B4 = document.querySelector('.B4')
// BODY ======
let hideAll = ()=>{
    if(!section1.classList.contains('hide')){
        section1.classList.add('hide')
    }
    if(!section2.classList.contains('hide')){
        section2.classList.add('hide')
    }
    if(!section3.classList.contains('hide')){
        section3.classList.add('hide')
    }
    if(!section4.classList.contains('hide')){
        section4.classList.add('hide')
    }
    if(!section5.classList.contains('hide')){
        section5.classList.add('hide')
    }
    if(!section6.classList.contains('hide')){
        section6.classList.add('hide')
    }
}
new WOW().init();
let div = document.querySelector('.Questions')
select1.addEventListener('click', show =()=>{
    hideAll();
    section1.classList.remove('hide');
    
})
select2.addEventListener('click', show =()=>{
    hideAll();
    section2.classList.remove('hide');
})
select3.addEventListener('click', show =()=>{
    hideAll();
    section3.classList.remove('hide');
})
select4.addEventListener('click', show =()=>{
    hideAll();
    section4.classList.remove('hide');
})
select5.addEventListener('click', show =()=>{
    hideAll();
    section5.classList.remove('hide');
})
select6.addEventListener('click', show =()=>{
    hideAll();
    section6.classList.remove('hide');
})

$(document).ready(function(){
    $(".item1").click(function(){
        $(this).next().slideToggle(1000);
        $($($(this).children()[0]).children()[2]).toggleClass("hide");
        $($($(this).children()[0]).children()[1]).toggleClass("hide");
    })
})

$(window).scroll(function(){
    Top = $(window).scrollTop();
    if(Top > 78){
        $('.navbar').css('background', 'white');
    }
    else{
        $('.navbar').css('background', 'transparent');
    }
    if(Top > 500){
        $('.scroll').removeClass('hide');
    }
    else{
        $('.scroll').addClass('hide');
    }
})



$('.navIcon').click(function(){
    $('.resNav').removeClass('hide');
})
$('.closeNav').click(function(){
    $('.resNav').addClass('hide')
})

jQuery("#responsive_headline").fitText();
// FITTEXT ==============
var scroll = new SmoothScroll('a[href*="#"]', {
    speed:500
});
// SMOTH SCROLL ==========
$(function() {  
    $("body").niceScroll({
        cursorcolor: "#34495E",
        cursorwidth: "10px"
    });
})
// NICE SCROLL ============