var images = ["gatob.jpg","gatopelon.webp", "fotogato.jpg" , "Gatos-4.jpg", "gataso.webp", "pgato.jpg"];
           
var names = ["Gato bobtaim","Gato egipcio", "Gato Siames", "Gato blanco", "Gato naranja", "Gato Pardo"];
          
var i = 0;
function update()
{
     i++;
     var cat_array = 5
     if(i > cat_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("cat_img").src = updatedImage;
     document.getElementById("cat").innerHTML = updatedName; 
}



