/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function showAbout(){
    alert("This tool uses linear programming to compute the static (no substitutions) team that scores maximally over the chosen race interval");
}

function showDisclaimer(){
    alert("This is an unofficial site, with no affiliation to Formula One (or any of their companies or brands). The author of this capability is simply a fan who enjoys playing the fantasy game. This information is provided with no guarantees as to its' accuracy, use at your own risk");
}
