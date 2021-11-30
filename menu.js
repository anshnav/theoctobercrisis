var t1 = new TimelineMax({paused: true});


t1.to(".nav-wrapper", 1, {x:0 ,display:'block', ease: Expo.easeInOut});
t1.staggerFrom(".nav-wrapper ul li", 0.5, {y: 20 , opacity: 0, ease: Expo.easeInOut}, 0.1);




t1.reverse();
$(document).on("click", ".toggle-btn", function() {
    t1.reversed(!t1.reversed());
});
$(document).on("click", "li", function() {
    t1.reversed(!t1.reversed());
});

console.clear();

//Create matchMediaList
var smallMediaQuery = window.matchMedia("(max-width:767px)"),
    mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:1099px)"),
    largeMediaQuery = window.matchMedia("(min-width:1100px)");

//Create listener for SMALL
var smallListener = function(e){
  if(e.matches){
  TweenMax.to(".nav-wrapper",1,{width:'90%'})
    console.log('small')
  }
};

//Create listener for MEDIUM
var mediumListener = function(e){
  if(e.matches){
    TweenMax.to(".nav-wrapper",1,{width:'50%'})
    console.log('medium')
  }
};

//Create listener for MEDIUM
var largeListener = function(e){
  if(e.matches){
    TweenMax.to(".nav-wrapper",1,{width:'30%'})
    console.log('large')
  }
};

//Add the listener to MediaQueryList
smallMediaQuery.addListener(smallListener);
mediumMediaQuery.addListener(mediumListener);
largeMediaQuery.addListener(largeListener);

// Initialise onload
smallListener(smallMediaQuery); 
mediumListener(mediumMediaQuery); 
largeListener(largeMediaQuery); 



// -------------Animate the toggle button spans on hover---------//

var $spanone = $('.one'),
    $spantwo = $('.two'),
    $togglebtn = $('.toggle-btn');

    $togglebtn.on('mouseenter', function(e){
      gsap.to($spanone, 0.5, {x: 4, ease: Expo.easeInOut});
      gsap.to($spantwo, 0.5, {x: -4, ease: Expo.easeInOut});
    })

    $togglebtn.on('mouseleave', function(e){
      gsap.to($spanone, 0.5, {x: 0, ease: Expo.easeInOut});
      gsap.to($spantwo, 0.5, {x: 0, ease: Expo.easeInOut});
     
    })
