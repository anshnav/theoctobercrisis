
var tl = gsap.timeline();
tl.fromTo('.main-logo', 2, {autoAlpha:0}, {autoAlpha:1});
tl.fromTo('.text-container', 3, {autoAlpha:0, y: 30}, {autoAlpha:1, y: 0});
tl.fromTo('.author-name', 3, {autoAlpha:0, y: 30}, {autoAlpha:1, y: 0});


//   --------------Scrolltrigger-----------------

gsap.registerPlugin(ScrollTrigger);



const reveal = gsap.utils.toArray('.fadein');

reveal.forEach((fadein, i) => {
  const anim = gsap.fromTo(fadein, {autoAlpha: 0, y: 50}, {duration: 2, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: fadein,
    start: "top center",
    animation: anim,
    toggleActions: 'play none none reverse'
    
  });
});


const linereveal = gsap.utils.toArray('.expand');

linereveal.forEach((expand, i) => {
  const anim = gsap.fromTo(expand, {width:'0%'}, {duration: 2, width: '40%'});
  ScrollTrigger.create({
    trigger: expand,
    start: "top center",
    animation: anim,
    toggleActions: 'play none none reverse'
    
  });
});





/* -----------------------------------------------
/* Particle JS
/* ----------------------------------------------- */


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 99,
        "density": {
          "enable": false,
          "value_area": 2051.7838682439087
        }
      },
      "color": {
        "value": "#BA6400"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 12
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);




//---------- Scroll down on page on click of arrows-----------//
gsap.registerPlugin(ScrollToPlugin);

document.getElementById('arrows').onclick = function() {linktosection()};


function linktosection(){

  gsap.to(window, {duration: 1, scrollTo:"#section-2"});
}










// ---------------Counter Jqery code---------------//

var options = {  
  useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
};

var counts = [];

$('.statvalue').each(function() {
  var num = $(this).attr('numx'); //end count
  var nuen = $(this).text();
  if (nuen === "") {
  nuen = 0;
  }

 counts.push(new CountUp(this, nuen, num, 0, 3, options));
});

var waypoint1 = new Waypoint({
element: document.getElementById("numbers"),
handler: function(direction) {
  if (direction == "up") {
    for (var i = 0; i < counts.length; i++) {
      counts[i].reset();
    }
  } else {
    for (var i = 0; i < counts.length; i++) {
      counts[i].start();
    }
  }
},
offset: "50%"
});




    
// ----------scroll progress indicator script---------//  


var counter = document.querySelector(".percent");

// TweenLite.set(counter, {
//     xPercent: -5,
//     yPercent: -5,
// });

// window.addEventListener("mousemove", moveCounter);

// function moveCounter(e) {
//     TweenLite.to(counter, 0.5, {
//         x: e.clientX,
//         y: e.clientY,
//     });
// }

function progress() {
    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

    var $bgColor = progress > 99 ? "#BF4242" : "#BF4242";
    var $textColor = progress > 99 ? "#BF4242" : "#333";

    // $("h1")
    //     .text(Math.round(progress) + "%")
    //     .css({ color: $textColor });

    $(".fill")
        .width(progress + "%")
        .css({ backgroundColor: $bgColor });
}
progress();
$(document).on("scroll", progress);


