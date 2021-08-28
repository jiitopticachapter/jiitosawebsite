let members = $(".team__members");
let isHover = false;

setInterval(() => {
  if (!isHover) {
    let min = 1;
    let max = $(members).length;
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    $(".team__members:nth-child(" + random + ")")
      .addClass("team__members--show")
      .siblings()
      .removeClass("team__members--show");
  }
}, 3000);
function mediaSize() {
  $(members).hover(
    () => {
      if (window.matchMedia("(min-width: 480px)").matches) {
        $(members).removeClass("team__members--show");
        isHover = true;
        console.log("hover");
      }
    },
    () => {
      if (window.matchMedia("(min-width: 480px)").matches) {
        isHover = false;
      }
    }
  );
}

mediaSize();
/* Attach the function to the resize event listener */
window.addEventListener("resize", mediaSize, false);

var acc = document.getElementsByClassName("year");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    animate: {
      duration: 200,
      down: {
        easing: "easeOutBounce",
        duration: 1000,
      },
    },
  });
});

//remains on the position when reloded!!

$(document).ready(function () {
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    localStorage.setItem("activeTab", $(e.target).attr("href"));
  });
  var activeTab = localStorage.getItem("activeTab");
  if (activeTab) {
    $('#myTab a[href="' + activeTab + '"]').tab("show");
  }
});

$(".year").live("expand", function (e) {
  var top = $(e.target).offset().top;
  if ($(window).scrollTop() > top) $(window).scrollTop(top);
});
