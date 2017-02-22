/*
*	Script to handle ekstrabladet.dk
*/

$(document).ready(function() {
    /*
    *	Find and remove elment from dom
    */
    var divs = $("#ebWireframe > div, body > div");
    for(var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if(div.id && div.id.length == 24) {
            div.remove();
        }
    }
    /*
        Remove cookie
    */
    document.cookie = 'is_using_adblocker=false;path=/;';
});
