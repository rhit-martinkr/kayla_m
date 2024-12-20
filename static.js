function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  


function static(){
    // window.onmouseover = function(event) {
    //     if (!event.target.matches('.buttonHome')) {
    //       var dropdowns = document.getElementsByClassName("dropdownButton-content");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }
    
    // var trigger = document.getElementById("profile"),
    // dropdown = document.getelementById("myDropdown");

trigger.onclick = function(){ // on image click
    dropdown.classList.toggle("active"); // toggle dropdown display
}

}


static(); 