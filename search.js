
    function button() {

      var button = document.getElementById("myDIV");
      if (button.style.display === "none") {
        button.style.display = "block";
      
      } else {
        button.style.display = "none";
      }
     
    }

   var btnContainer = document.getElementById("nav");
    var btns = btnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
