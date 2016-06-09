/*
*	Script to handle jyllands-posten.dk
*/
    
var elementid;
/*
*	Find full name of dynamic id
*/
elementid = $("[id^='overlay']").attr('id');

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

