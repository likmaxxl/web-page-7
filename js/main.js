$(document).ready(function() {

  //nav  content var
var nav;
var th;
var an;

//height var
var win;

  //nav  content
nav=$('nav ul li a').on('click',function (e) {
  e.preventDefault()
th=$(this).attr('href');
an=$(th).offset().top;
console.log(th);
console.log(an);
$('html,body').animate({
  scrollTop : an
}, 1000)
});




});

//height
win=$(window).height();
$('.opac').css('height',win)
$('#bckgr').css('height',win)
