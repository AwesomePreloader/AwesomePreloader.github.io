// JavaScript Document
/*** Animations ***/
function hide(element) {
	element.style.display = "none";
}
function show(element) {
	element.style.display = "block";
}
function fadeIn(element) {
	element.style.opacity = 1;
}
function fadeOut(element) {
	element.style.opacity = 0;
}
function slideIn(element) {
	element.style.position = "absolute";
	element.style.left = -(getComputedStyle(element, null).getPropertyValue("width").replace("px",""))+"px";
	var duration = parseFloat(element.style.transitionDuration.replace("s","")) * 1000;
	setTimeout(function() {
		element.style.opacity = 1;
		element.style.left = 0;
	}, duration);
	//element.style.left = 0;
}
function slideOut(element) {
	element.style.left = -(getComputedStyle(element, null).getPropertyValue("width").replace("px",""))+"px";
	var duration = parseFloat(element.style.transitionDuration.replace("s","")) * 1000;
	setTimeout(function() {
		element.style.opacity = 0;
	}, duration);
}
/*** COMPONENTS ***/
/* Progress Bar STARTS here */
document.getElementsByClassName("progress")[0].innerHTML = "<div class='bar'></div>";
var body_e = Array.from(document.getElementsByTagName("body"));
var frame_e = Array.from(document.getElementsByTagName("frame"));
var iframe_e = Array.from(document.getElementsByTagName("iframe"));
var img_e = Array.from(document.getElementsByTagName("img"));
var input_image_e = Array.from(document.getElementsByTagName("input_image"));
var link_e = Array.from(document.getElementsByTagName("link"));
var script_e = Array.from(document.getElementsByTagName("script"));
var style_e = Array.from(document.getElementsByTagName("style"));
var everything = body_e.concat(frame_e, iframe_e, img_e, input_image_e, link_e, script_e, style_e);
var element_percentage = 100 / everything.length;
var loaded_percentage = 0;
document.getElementsByClassName("bar")[0].style.width = 0+"%";
document.getElementsByClassName("progress")[0].style.opacity = 1;

var progress_style = window.getComputedStyle(document.getElementsByClassName("progress")[0]);

function hideProgressBar() {
	if (document.getElementsByClassName("progress")[0].style.opacity == 1) {
		var progress_duration = parseInt(progress_style.getPropertyValue('transition-duration').replace("s","")) * 1000;
		setTimeout(function() {
			fadeOut(document.getElementsByClassName("progress")[0]);
		}, progress_duration);
	}
}
function loadPercentage() {
	loaded_percentage += element_percentage;
	document.getElementsByClassName("bar")[0].style.width = loaded_percentage+"%";
	if (document.getElementsByClassName("bar")[0].style.width == "100%") {
		hideProgressBar();
	}
}
function progressBar() {
	for (var i = 0; i < everything.length; i++) {
		this.onload = loadPercentage();
	}
}
/* Progress Bar ENDS here */

/* MobileNavMenu STARTS here */
var desktop_menu = document.getElementsByClassName("desktop-menu")[0];
var mobile_menu = document.getElementsByClassName("mobile-menu")[0];
var mobile_menu_toggler = document.getElementsByClassName("mobile-menu-toggler-button")[0];
function mobileMenuOverlay() {
	var general_overlay = document.getElementsByClassName("general-overlay")[0];
	general_overlay.onclick = function() {
		if (mobile_menu.getAttribute("animation") == "fadeIn") {
			fadeOut(mobile_menu);
			var duration = parseFloat(mobile_menu.style.transitionDuration.replace("s","")) * 1000;
			setTimeout(function() {
				mobile_menu.style.zIndex = -1;
			}, duration);
		}
		else if (mobile_menu.getAttribute("animation") == "slideIn") {
			slideOut(mobile_menu);
		}
	}
}
function mobileMenu() {
	mobile_menu.innerHTML = "<div class='general-overlay'></div><ul class='mobile-menu-drawer'>"+desktop_menu.innerHTML+"</ul></div>";
	mobileMenuOverlay();
	var animation = mobile_menu.getAttribute("animation");
	var animation_duration = mobile_menu.getAttribute("animation-duration");
	if (animation_duration) {
		mobile_menu.style.transitionDuration = animation_duration;
	}
	if (animation == "fadeIn") {
		mobile_menu.style.opacity = 0;
		mobile_menu.style.zIndex = 2;
		fadeIn(mobile_menu);
	}
	if (animation == "slideIn") {
		mobile_menu.style.zIndex = 2;
		slideIn(mobile_menu);
	}
}
//mobile_menu_toggler.addEventListener("click", mobileMenu(), false);
mobile_menu_toggler.onclick = function() {
	mobileMenu();
}
mobile_menu_toggler.ontouchstart = function() {
	mobileMenu();
}
/* MobileNavMenu ENDS here */