// event pada saat link di klik
$('.nav-link').on('click', function(e) {

	var tujuan = $(this).attr('href');
   
	var elemenTujuan = $(tujuan);
   
	$('html , body').animate({
	 scrollTop: elemenTujuan.offset().top - 70
	}, 1250, 'easeInOutExpo');
   
	e.preventDefault();
  
});



   // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "7px 5px";
  
  } else {
    document.getElementById("navbar").style.padding = "30px 5px";

  }
   
}

$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if(wScroll > $('.about').offset().top - 200 ){
    $('.about .thumbnail').each(function(i){
      setTimeout(function(){
        $('.about .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i+1));
    })
    
  }

  if(wScroll > $('.portfolio').offset().top - 200 ){
    $('.portfolio .card').each(function(i){
      setTimeout(function(){
        $('.portfolio .card').eq(i).addClass('muncul');
      }, 300 * (i+1));
    })
    
  }

  if(wScroll > $('.kartu').offset().top - 200 ){
    $('.kartu .col-sm').each(function(i){
      setTimeout(function(){
        $('.kartu .col-sm').eq(i).addClass('muncul');
      }, 100 * (i+1));
    })
    
  }


});




//profile
$(".gallery").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled: true
  }
});



//berita
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

/* owl carousel */ 
$('#testimonial-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})