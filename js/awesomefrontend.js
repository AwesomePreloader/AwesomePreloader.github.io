// JavaScript Document
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
function loadPercentage() {
	loaded_percentage += element_percentage;
	document.getElementsByClassName("bar")[0].style.width += loaded_percentage+"%";
}
for (var i = 0; i < everything.length; i++) {
	this.onload = loadPercentage();
}
var hidden = false;
function hideProgressBar() {
	if (hidden == false) {
		hidden = true;
		document.getElementsByClassName("progress")[0].style.opacity = 0;
	}
}
window.onload = function() {
	document.getElementsByClassName("bar")[0].style.width = "100%";
	document.getElementsByClassName("bar")[0].addEventListener("webkitTransitionEnd", hideProgressBar());
	document.getElementsByClassName("bar")[0].addEventListener("oTransitionEnd", hideProgressBar());
	document.getElementsByClassName("bar")[0].addEventListener("msTransitionEnd", hideProgressBar());
	document.getElementsByClassName("bar")[0].addEventListener("transitionend", hideProgressBar());
}
/* Progress Bar ENDS here */

/* MobileNavMenu STARTS here */
document.getElementsByClassName("mobile-menu")[0].innerHTML = document.getElementsByClassName("desktop-menu")[0].innerHTML;
/* MobileNavMenu ENDS here */