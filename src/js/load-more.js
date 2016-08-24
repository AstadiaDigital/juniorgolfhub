$(function(){
    $("div.entry").slice(0, 6).show(); // select the first ten

    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $("div:hidden").slice(0, 6).show(); // select next 6 hidden divs and show them
        if($("div:hidden").length == 0){ // check if any hidden divs still exist
            $("#load").text('No more articles').addClass('disabled'); // alert if there are none left
        }
    });
});
