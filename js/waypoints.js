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
