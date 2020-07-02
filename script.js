window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $("html, body").animate({ scrollTop: "0px" }); // Chrome, Firefox etc.   uncomment this only
    //document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    //document.documentElement.scrollTop = 0; // For IE and Firefox
}



