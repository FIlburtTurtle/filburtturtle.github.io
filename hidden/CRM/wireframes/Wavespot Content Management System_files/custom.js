//Dropdown Menu
$( document ).ready(function() {
	$('#menu > ul > li > a').click(function() {
		$('#menu li').removeClass('active');
		$(this).closest('li').addClass('active'); 
		var checkElement = $(this).next();
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		}
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#menu ul ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
		}
		if($(this).closest('li').find('ul').children().length == 0) {
			return true;
		} else {
			return false; 
		}   
	});
});

//Sidebar
$(function() {
	var s = 0;
	
	$('.arrow-box').click(function() {
		if (s == 0) {
			s = 1;
			$('#sidebar').css('left', '-220px');
			$('.dashboard-wrapper').css('margin-left', '0px');
			$('.logo').css('background', 'transparent');
		} else {
			s = 0;
			$('#sidebar').css('left', '0');
			$('.dashboard-wrapper').css('margin-left', '220px');
			$('.logo').css('background', '');
		}
	});
});

//Show a sidebar
function showSidebar(sidebarButton, sidebarClass){
	$(document).ready(function(){
		$(sidebarButton).on('click', function(){
			if ($(sidebarClass).css('right') == '0px'){
				$(sidebarClass).stop().animate({right:'-350px'}, 50);
			}
			else {
				$(".sidebar").stop().animate({right: "-350px"}, 50, function(){
				$(sidebarClass).stop().animate({right: "0px"}, 50)					
				});
			}
		});
	});

}
/*
//Add future sidebars here
*/

showSidebar('#show-right-info-bar-email', '.right-info-bar-email')
showSidebar('#show-right-info-bar-coupon', '.right-info-bar-coupon')
showSidebar('#show-right-info-bar-goals', '.right-info-bar-goals')
showSidebar('#show-right-info-bar-advertising', '.right-info-bar-advertising')
showSidebar('#show-right-info-bar-splash', '.right-info-bar-splash')
showSidebar('#show-right-info-bar-checkIn', '.right-info-bar-checkIn')

//Show the link profile screen
function showSocial(socialButton, socialLogin){
	$(document).ready(function(){
		$(socialButton).on('click', function(){
			$('.isShown').hide();
			$(socialLogin).show();
		});
	});
}

/*
//Add future profile links here
*/
showSocial('#facebookButton','#facebook-login')
showSocial('#twitterButton','#twitter-login')
showSocial('#googleButton','#google-login')
showSocial('#linkedinButton','#linkedin-login')
showSocial('#yelpButton','#yelp-login')
showSocial('#emailButton','#email-login')

//Add a checkmark to something
function checkMe(checker, checkMark){
	$(document).ready(function(){
		$(checker).on('click', function(){
			if ($(this).html() == 'live') {
				$(checker).html('choose');
				$(this).removeClass('btn-success').addClass('btn-primary');
				$(checkMark).fadeOut();
				return
			}
			if ($(this).html() == 'choose' ) {
				$(checker).html('choose').removeClass('btn-success').addClass('btn-primary');
				$(this).html('live');
				$(this).removeClass('btn-primary').addClass('btn-success');
				$(checkMark).fadeOut();
				$(checkMark).fadeIn();
				return
			}else{
			$(checkMark).fadeIn();
			$(this).html('live');
			$(this).removeClass('btn-primary').addClass('btn-success');
			}
		});
	});
}

/*
//Add future checkmarks here
*/
checkMe("#checkin-checker", "#checkin-check");
checkMe("#ad-checker", "#ad-check");
checkMe("#goal-checker", "#goal-check");
checkMe(".coupon-checker", "#coupon-check");
checkMe(".splash-checker", "#splash-check");
checkMe(".email-checker", "#email-check");