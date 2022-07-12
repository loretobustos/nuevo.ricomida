
//cambio de color al realizar doble click
$(document).ready(function () {
    var toggle = true;
    $("h6").on({
        dblclick: function () {
            if (toggle) {
              
                
                $(this).css("color", "red");
                toggle = false;
            } else {

                
                $(this).css("color", "dark");
                toggle = true;
            }
        }
    });
});



//ocultar recetas con toggle
$(document).ready(function(){
    $("b").click(function(){
      $("h5").toggle();
    });
  });