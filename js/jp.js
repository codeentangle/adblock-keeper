/*
*	Script to handle jyllands-posten.dk
*/

$(document).ready(function() {
	/*
	*	Find full name of dynamic id
	*/
	var elementid = $("[id^='overlay']").attr('id');

	/*
	*	Remove none unique part of string
	*/
	elementid = elementid.replace("overlay", "");

	/*
	*	Remove overlay and message
	*/
	$("#overlay" + elementid + ", .userOverlay" + elementid).remove();

	/*
	*	Enable link functionality again - nice try JP!
	*/
	$("a").click(function() {
		window.location = this.href;
	});
});
