
var tl = gsap.timeline();
tl.fromTo('.main-logo', 2, {autoAlpha:0}, {autoAlpha:1});
tl.fromTo('.text-container', 3, {autoAlpha:0, y: 30}, {autoAlpha:1, y: 0});
tl.fromTo('.author-name', 3, {autoAlpha:0, y: 30}, {autoAlpha:1, y: 0}, "-=1");










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
  const anim = gsap.fromTo(expand, {width:'0%'}, {duration: 2, width: '60%'});
  ScrollTrigger.create({
    trigger: expand,
    start: "top center",
    animation: anim,
    toggleActions: 'play none none reverse'
    
  });
});


const slideup = gsap.utils.toArray('.slide');

slideup.forEach((slide, i) => {
  const anim = gsap.fromTo(slide, {y: 200}, {delay: 2, duration: 2, y:0});
  ScrollTrigger.create({
    trigger: ".container-2",
    start: "top center",
    animation: anim,
    toggleActions: 'play none none reverse'
    
  });
});













//---------- Scroll down on page on click of arrows-----------//

gsap.registerPlugin(ScrollToPlugin);

document.getElementById('arrows').onclick = function() {linktosection()};


function linktosection(){

  gsap.to(window, {duration: 1, scrollTo:"#section-1"});
}








  
  
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




