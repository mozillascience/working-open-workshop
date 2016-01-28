// Navigation 1.0 ALPHA
//
// * Highlights the appropriate element in the navigation when scrolling through the page
// * Scrolls to appropriate section of the page when the navigation is clicked

var sections = [];
var articleSections = $();
var autoscrolling = false;

$(document).ready(function(){

  $("nav").on("click","a",function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    var section = $(this).attr("href");

    autoscrolling = true;

    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 500, function(){
      autoscrolling = false;
      window.location.hash = section;
    });

    return false;
  });

  $("nav a").each(function(i,el){
    var sectionName = $(el).attr("href");
    if(sectionName.length > 0) {
      sectionName = sectionName.replace("#","").toLowerCase();
      sections.push(sectionName);
    }
  });

  var jam = $("article *[id]");
  $(jam).each(function(i,el){
    var id = $(el).attr("id");
    id = id.replace("#","").toLowerCase();
    if(sections.indexOf(id) > -1) {
      articleSections.push(el);
    }
  });

  $(window).on("scroll",function(){
    if(autoscrolling == false) {
      scroll();
    }
  });

});

function scroll(){
  articleSections.each(function(i,el){
    var windowTop = $(window).scrollTop();
    var offset = $(el).offset();
    var fromTop = offset.top - windowTop;
    if(fromTop > 0 && fromTop < 400) {
      var id = $(el).attr('id');
      id = id.toLowerCase().replace("#","");
      $("nav .selected").removeClass("selected");
      $("nav a[href=#"+id+"]").addClass("selected");
    }
  });
}
