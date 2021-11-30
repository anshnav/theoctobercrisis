
    var tl = gsap.timeline();
    tl.fromTo('.main-logo', 2, {autoAlpha:0}, {autoAlpha:1});
    tl.fromTo('.text-container', 3, {autoAlpha:0, y: 30}, {autoAlpha:1, y: 0});
    tl.fromTo('.author-name', 3, {autoAlpha:0, y: 30}, {autoAlpha:1, y: 0});
    
    
    
    
    
    // ----------Jquery code for the timeline----------
    
    
    (function($) {
        $.fn.timeline = function() {
          var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
          };
          selectors.item.eq(0).addClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          var itemLength = selectors.item.length;
          $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function(i) {
              min = $(this).offset().top;
              max = $(this).height() + $(this).offset().top;
              var that = $(this);
              if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                  "background-image",
                  "url(" +
                    selectors.item
                      .last()
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.last().addClass(selectors.activeClass);
              } else if (pos <= max - 40 && pos >= min) {
                selectors.id.css(
                  "background-image",
                  "url(" +
                    $(this)
                      .find(selectors.img)
                      .attr("src") +
                    ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                $(this).addClass(selectors.activeClass);
              }
            });
          });
        };
      })(jQuery);
      
      $("#timeline-1").timeline();




//---------- Scroll down on page on click of arrows-----------//

gsap.registerPlugin(ScrollToPlugin);

document.getElementById('arrows').onclick = function() {linktosection()};


function linktosection(){

  gsap.to(window, {duration: 1, scrollTo:"#timeline-1"});
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


      