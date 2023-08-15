function myFunction() {
    var x = document.getElementById("menu-items");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
    var y = document.getElementById("navbar-container")
    if(y.style.height === "100px"){
        y.style.height= "max-content"
    }
    else{
        y.style.height = "100px"
    }
  }