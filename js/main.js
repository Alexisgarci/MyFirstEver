
/////////////// 
// LIGHTBOX //
/////////////

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

//////////////// 
//   SETA     //
//	  &      //
//	Navbar  //
/////////////

window.onload = function(){
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("seta").style.backgroundColor = 'rgba(0, 0, 0, 0.7)', 'important';
			document.getElementById("seta").style.height = '30px', 'important';
			document.getElementById("navbar").style.setProperty( 'background-Color', 'rgba(0, 0, 0, 1)', 'important');
			document.getElementById("navbar").style.setProperty( 'height', '35px', 'important');
			document.getElementById("navbar").style.setProperty( 'font-size', '1.4em', 'important');
		} else {
			document.getElementById("seta").style.backgroundColor = 'rgba(0, 0, 0, 1)', 'important';
			document.getElementById("seta").style.height = '65px', 'important';
			document.getElementById("navbar").style.backgroundColor = 'rgba(0, 0, 0, 0.7)', 'important';
			document.getElementById("navbar").style.setProperty( 'height', '80px', 'important');
			document.getElementById("navbar").style.setProperty( 'font-size', '1.9em', 'important');
		}
		if (window.innerHeight + window.scrollY >= document.body.clientHeight) {
			document.getElementById('seta').style.display='none';
		} else {
			document.getElementById('seta').style.display='block';
		}
	};
}

/////////////// 
//  SCROLL  //
/////////////

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });