(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var app = {}; // ==============
// SMOOTH scroll
// ==============
// e prevent default 
// reset the form 
// sweet alert the form is submitted 
// stay on the page

app.submitForm = function () {
  $(".submitForm").on("click", function (e) {
    console.log("submit button clicked");
    e.preventDefault();
  });
}; // ==============
// SMOOTH scroll
// ==============


app.smoothScroll = function () {
  // Select all links with hashes
  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } // else {
          //     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          //     $target.focus(); // Set focus again
          // };

        });
      }
    }
  });
};

app.init = function () {
  app.smoothScroll();
  app.submitForm();
};

$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQU0sR0FBRyxHQUFHLEVBQVosQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLEdBQUcsQ0FBQyxVQUFKLEdBQWlCLFlBQVU7QUFDdkIsRUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVMsQ0FBVCxFQUFXO0FBQ3BDLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDSCxHQUhEO0FBSUgsQ0FMRCxDLENBUUE7QUFDQTtBQUNBOzs7QUFFQSxHQUFHLENBQUMsWUFBSixHQUFtQixZQUFVO0FBQ3pCO0FBQ0EsRUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQ0k7QUFESixHQUVLLEdBRkwsQ0FFUyxZQUZULEVBR0ssR0FITCxDQUdTLGFBSFQsRUFJSyxLQUpMLENBSVcsVUFBVSxLQUFWLEVBQWlCO0FBQ3BCO0FBQ0EsUUFDSSxRQUFRLENBQUMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixLQUExQixFQUFpQyxFQUFqQyxLQUF3QyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBQXhDLElBRUEsUUFBUSxDQUFDLFFBQVQsSUFBcUIsS0FBSyxRQUg5QixFQUlFO0FBQ0U7QUFDQSxVQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFOLENBQWQ7QUFDQSxNQUFBLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBUCxHQUFnQixNQUFoQixHQUF5QixDQUFDLENBQUMsV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBZ0MsR0FBakMsQ0FBbkMsQ0FIRixDQUlFOztBQUNBLFVBQUksTUFBTSxDQUFDLE1BQVgsRUFBbUI7QUFDZjtBQUNBLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxRQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsT0FBaEIsQ0FBd0I7QUFDcEIsVUFBQSxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQVAsR0FBZ0I7QUFEUCxTQUF4QixFQUVHLElBRkgsRUFFUyxZQUFZO0FBQ2pCO0FBQ0E7QUFDQSxjQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFmO0FBQ0EsVUFBQSxPQUFPLENBQUMsS0FBUjs7QUFDQSxjQUFJLE9BQU8sQ0FBQyxFQUFSLENBQVcsUUFBWCxDQUFKLEVBQTBCO0FBQUU7QUFDeEIsbUJBQU8sS0FBUDtBQUNILFdBUGdCLENBUWpCO0FBQ0E7QUFDQTtBQUNBOztBQUNILFNBZEQ7QUFlSDtBQUNKO0FBQ0osR0FuQ0w7QUFvQ0gsQ0F0Q0Q7O0FBd0NBLEdBQUcsQ0FBQyxJQUFKLEdBQVcsWUFBVTtBQUNqQixFQUFBLEdBQUcsQ0FBQyxZQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsVUFBSjtBQUNILENBSEQ7O0FBS0EsQ0FBQyxDQUFDLFlBQVU7QUFDUixFQUFBLEdBQUcsQ0FBQyxJQUFKO0FBQ0gsQ0FGQSxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmNvbnN0IGFwcCA9IHt9XHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBTTU9PVEggc2Nyb2xsXHJcbi8vID09PT09PT09PT09PT09XHJcblxyXG4vLyBlIHByZXZlbnQgZGVmYXVsdCBcclxuLy8gcmVzZXQgdGhlIGZvcm0gXHJcbi8vIHN3ZWV0IGFsZXJ0IHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBcclxuLy8gc3RheSBvbiB0aGUgcGFnZVxyXG5cclxuXHJcbmFwcC5zdWJtaXRGb3JtID0gZnVuY3Rpb24oKXtcclxuICAgICQoXCIuc3VibWl0Rm9ybVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0IGJ1dHRvbiBjbGlja2VkXCIpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIFNNT09USCBzY3JvbGxcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmFwcC5zbW9vdGhTY3JvbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gU2VsZWN0IGFsbCBsaW5rcyB3aXRoIGhhc2hlc1xyXG4gICAgJCgnYVtocmVmKj1cIiNcIl0nKVxyXG4gICAgICAgIC8vIFJlbW92ZSBsaW5rcyB0aGF0IGRvbid0IGFjdHVhbGx5IGxpbmsgdG8gYW55dGhpbmdcclxuICAgICAgICAubm90KCdbaHJlZj1cIiNcIl0nKVxyXG4gICAgICAgIC5ub3QoJ1tocmVmPVwiIzBcIl0nKVxyXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gT24tcGFnZSBsaW5rc1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKVxyXG4gICAgICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaWd1cmUgb3V0IGVsZW1lbnQgdG8gc2Nyb2xsIHRvXHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lcyBhIHNjcm9sbCB0YXJnZXQgZXhpc3Q/XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IGlmIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBnb25uYSBoYXBwZW5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTXVzdCBjaGFuZ2UgZm9jdXMhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdGFyZ2V0LmlzKFwiOmZvY3VzXCIpKSB7IC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgd2FzIGZvY3VzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7IC8vIEFkZGluZyB0YWJpbmRleCBmb3IgZWxlbWVudHMgbm90IGZvY3VzYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgJHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5hcHAuaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuc21vb3RoU2Nyb2xsKCk7XHJcbiAgICBhcHAuc3VibWl0Rm9ybSgpO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICBhcHAuaW5pdCgpO1xyXG59KSJdfQ==
