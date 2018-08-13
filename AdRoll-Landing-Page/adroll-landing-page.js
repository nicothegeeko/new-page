/*$( "#button1" ).click(function() {
  alert( "Handler for .click() called." );
});*/

$(document).ready(function(){  

function startExploring() {
        $(".button1").click(function() {
            $(this).hide(2000, function() {
                $(this).remove();
            });
        });

};


}




