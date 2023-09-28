$(document).ready(function(){

  
 $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if (scroll>=50){
        $(".sticky").addClass("stickyadd");
    }
    else{
        $(".sticky").removeClass("stickyadd");

    }
})

var typed = new Typed("#element",{
    strings: ["V S Sadique","a Developer","a Singer", "a Video Editor","a Photographer"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    startDelay:1000
});





//progress bars
var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style","width:75%;transition:1s all");
        p[1].setAttribute("style","width:75%;transition:1.5s all");
        p[2].setAttribute("style","width:75%;transition:1.7s all");
        p[3].setAttribute("style","width:90%;transition:2s all");
        p[4].setAttribute("style","width:90%;transition:2.3s all");
        p[5].setAttribute("style","width:95%;transition:2.5s all");
        
    },
    offset:'90%'
  });

  var filterizd = $('.filter-container').filterizr({
    animationDuration :.5,
  });

//owl carousel
$(".owl-carousel").owlCarousel({
    items: 1, 
    loop: true, 
    autoplay: true, 
    autoplayTimeout: 5000, 
    nav: false, 
});
//form-submition
document.getElementById("submit-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    })
    .then(function(response) {
        if (response.ok) {
            alert   ('Form Submitted Successfully');
            window.location.reload();
        } else {
            console.error("Form submission failed.");
        }
    })
    .catch(function(error) {
        console.error("Network error:", error);
    });
});


})