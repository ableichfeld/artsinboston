/*----TEMPLATE:

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
})

-----*/

var opacitychange = new Waypoint({
  element: document.getElementById('waypoint1'),
  handler: function(direction) {
    if(direction === "down") {

      document.getElementById("introPhoto").src="photos/introTransitionR.gif";
      document.getElementById("introPhotoMobile").src="photos/introTransitionMobileR.gif";

    } else if(direction === "up") {

      document.getElementById("introPhoto").src="photos/introTransition.gif";
      document.getElementById("introPhotoMobile").src="photos/introTransitionMobile.gif";

    }
  }
})

var danceScroll = new Waypoint({
  element: document.getElementById('danceGallery'),
  handler: function(direction) {
    if(direction === "down") {
      document.getElementById("danceScroll").style.opacity="0";}
    }
})

var philharmonicScroll = new Waypoint({
  element: document.getElementById('philharmonicGallery'),
  handler: function(direction) {
    if(direction === "down") {
      document.getElementById("philharmonicScroll").style.opacity="0";}
    }
})

var chuangScroll = new Waypoint({
  element: document.getElementById('chuangGallery'),
  handler: function(direction) {
    if(direction === "down") {
      document.getElementById("chuangScroll").style.opacity="0";}
    }
})
